import "./img/add.svg";
import classes from "./jogsBox.module.scss";
import { FilterBox } from "./components/filterBox";
import { JogInfoBox } from "./components/jogInfoBox";

export function JogsBox() {
  return (
    <>
      <FilterBox />
      <div className={classes.add}></div>
      <JogInfoBox
        date="19.12.2021"
        speed="100 kmh"
        distance="100 km"
        time="1 h"
      />
    </>
  );
}
