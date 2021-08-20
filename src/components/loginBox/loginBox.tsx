import classes from "./loginBox.module.scss";
import "./img/bear.svg";
import "./img/pink-bear.png";
import { Context } from "../../context";
import { useContext } from "react";

export function LoginBox() {
  let { setAccessToken, setJugs } = useContext(Context);

  function setToken() {
    try {
      fetch("https://jogtracker.herokuapp.com/api/v1/auth/uuidLogin", {
        body: "uuid=hello",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        method: "POST",
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          localStorage.setItem("access_token", JSON.stringify(data.response));
          setAccessToken(data.response);
        });
    } catch {}
  }

  return (
    <div className={classes["full-body"]}>
      <div className={classes.container}>
        <div className={classes["bear-img"]}></div>
        <button
          className={classes.button}
          onClick={() => {
            setToken();
          }}
        >
          Let me in
        </button>
      </div>
    </div>
  );
}
