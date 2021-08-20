import "./sad-smile.svg";
import classes from "./emptyJogsBox.module.scss";
import { NavLink } from "react-router-dom";

export function EmptyJogsBox() {
  return (
    <div className={classes["full-body"]}>
      <div className={classes["sad-smile"]}></div>
      <p className={classes.text}>Nothing is there</p>
      <NavLink to="/jogs/add">
        <button className={classes.button}>Create your jog first</button>
      </NavLink>
    </div>
  );
}
