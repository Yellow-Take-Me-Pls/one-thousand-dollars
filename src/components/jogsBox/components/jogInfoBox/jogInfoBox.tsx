import "./img/jog.svg";
import classes from "./jogInfoBox.module.scss";

export function JogInfoBox({
  date,
  speed,
  distance,
  time,
}: {
  date: string;
  speed: string;
  distance: string;
  time: string;
}) {
  return (
    <div className={classes.box}>
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
  );
}
