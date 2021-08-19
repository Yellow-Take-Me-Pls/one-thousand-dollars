import classes from "./loginBox.module.scss";
import "./img/bear.svg";
import "./img/pink-bear.png";

export function LoginBox() {
  return (
    <div className={classes["full-body"]}>
      <div className={classes.container}>
        <div className={classes["bear-img"]} ></div>
        <button className={classes.button}>Let me in</button>
      </div>
    </div>
  );
}
