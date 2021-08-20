import "./img/cancel.svg";
import classes from "./changeBox.module.scss";
import { ChangeBoxType } from "../../types/changeBoxType";
import { NavLink } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import { Context } from "../../context";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function ChangeBox({ boxType }: { boxType: ChangeBoxType }) {
  let { selectedJog, setSelectedJog, accessToken, setAccessToken } =
    useContext(Context);
  let [newDate, setNewDate] = useState(
    selectedJog ? new Date(selectedJog.date * 1000) : null
  );
  const distanceRef = useRef(null);
  const timeRef = useRef(null);

  return (
    <div className={classes["full-body"]}>
      <div className={classes.container}>
        <NavLink to="/jogs">
          <div
            className={classes["cancel-button"]}
            onClick={() => {
              setSelectedJog(null);
            }}
          ></div>
        </NavLink>
        <div className={classes.field}>
          <p>Distance</p>
          <input
            ref={distanceRef}
            type="number"
            defaultValue={selectedJog ? selectedJog.distance : ""}
          />
        </div>
        <div className={classes.field}>
          <p>Time</p>
          <input
            ref={timeRef}
            type="number"
            defaultValue={selectedJog ? selectedJog.time : ""}
          />
        </div>
        <div className={classes.field}>
          <p>Date</p>
          <div className={classes["data-picker"]}>
            <DatePicker
              selected={newDate}
              dateFormat="dd.MM.yyyy"
              /// @ts-ignore
              onChange={(date) => setNewDate(date)}
            />
          </div>
        </div>
        <div className={classes.field}>
          <NavLink
            className={classes["button-link"]}
            to="/jogs"
            onClick={(event) => {
              if (
                (distanceRef.current! as HTMLInputElement)?.value.length > 0 &&
                (timeRef.current! as HTMLInputElement)?.value.length > 0 &&
                newDate
              ) {
                try {
                  fetch("https://jogtracker.herokuapp.com/api/v1/data/jog", {
                    body: `date=${newDate}&time=${
                      (timeRef.current! as HTMLInputElement).value
                    }&distance=${
                      (distanceRef.current! as HTMLInputElement).value
                    }${
                      boxType === ChangeBoxType.EDIT
                        ? `&jog_id=${selectedJog.id}&user_id=${selectedJog.user_id}`
                        : ""
                    }`,
                    headers: {
                      Accept: "application/json",
                      Authorization: `Bearer ${accessToken.access_token}`,
                      "Content-Type": "application/x-www-form-urlencoded",
                    },
                    method: boxType === ChangeBoxType.EDIT ? "PUT" : "POST",
                  })
                    .then((response) => {
                      return response.json();
                    })
                    .then((data) => {
                      if (data.error_message) {
                        localStorage.clear();
                        setAccessToken();
                      } else {
                        setSelectedJog(null);
                      }
                    });
                } catch {}
              } else {
                alert("Fill in all the fields!");
                event.preventDefault();
              }
            }}
          >
            <button className={classes.button}>Save</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
