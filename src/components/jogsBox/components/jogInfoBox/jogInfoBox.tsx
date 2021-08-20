import { MouseEventHandler } from "react";
import "./img/jog.svg";
import classes from "./jogInfoBox.module.scss";

export function JogInfoBox({
  onClick,
  date,
  speed,
  distance,
  time,
}: {
  onClick: MouseEventHandler<HTMLDivElement>;
  date: string;
  speed: string;
  distance: string;
  time: string;
}) {
  return (
    <div className={classes.box} onClick={onClick}>
      <div className={classes.container}>
        <div className={classes.img}></div>
        <div className={classes["info-box"]}>
          <p>{date}</p>
          <p>
            <span>Speed: </span>
            {speed}
          </p>
          <p>
            <span>Distance: </span>
            {distance}
          </p>
          <p>
            <span>Time: </span>
            {time}
          </p>
        </div>
      </div>
    </div>
  );
}
