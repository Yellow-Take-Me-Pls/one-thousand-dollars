import "./img/add.svg";
import classes from "./jogsBox.module.scss";
import { FilterBox } from "./components/filterBox";
import { JogInfoBox } from "./components/jogInfoBox";
import { NavLink } from "react-router-dom";
import { Loader } from "./components/loader";
import { Context } from "../../context";
import { useContext, useEffect } from "react";
import { Jog } from "../../types/jog";
import moment from "moment";
import { EmptyJogsBox } from "./components/emptyJogsBox";

export function JogsBox() {
  let {
    jogs,
    setJogs,
    accessToken,
    setAccessToken,
    startDate,
    endDate,
    setSelectedJog,
  } = useContext(Context);

  useEffect(() => {
    try {
      fetch("https://jogtracker.herokuapp.com/api/v1/data/sync", {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${accessToken.access_token}`,
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (data.error_message) {
            localStorage.clear();
            setAccessToken();
          } else {
            setJogs(data.response.jogs);
          }
        });
    } catch {}
  }, []);

  const filtredJogs: Jog[] = jogs
    ? jogs.filter((element: Jog) => {
        const current = new Date(element.date * 1000);
        const start = new Date(startDate);
        const end = new Date(endDate);

        if (startDate) {
          if (endDate) return current >= start && current <= end;
          return current >= start;
        }
        if (endDate) return current <= end;

        return true;
      })
    : [];

  return (
    <>
      <FilterBox />
      {filtredJogs.length > 0 && (
        <NavLink to="/jogs/add">
          <div className={classes.add}></div>
        </NavLink>
      )}
      {!jogs && (
        <div className={classes.loader}>
          <Loader />
        </div>
      )}
      <div className={classes["jogs-box"]}>
        {filtredJogs?.map((element: Jog) => (
          <NavLink to="/jogs/edit" key={element.id}>
            <JogInfoBox
              onClick={() => {
                setSelectedJog(element);
              }}
              date={moment(element.date * 1000).format("DD.MM.YYYY")}
              distance={`${element.distance} km`}
              time={`${element.time} min`}
              speed={`${Math.floor(
                element.distance / (element.time / 60)
              )} kmh`}
            />
          </NavLink>
        ))}

        {filtredJogs.length === 0 && <EmptyJogsBox />}
      </div>
    </>
  );
}
