import classes from "./filterBox.module.scss";
import DatePicker from "react-datepicker";
import { useContext, useState } from "react";
import { Context } from "../../../../context";
import "react-datepicker/dist/react-datepicker.css";

export function FilterBox() {
  let [startDate, setStartDate] = useState(null);
  let [endDate, setEndDate] = useState(null);
  let { isOpenFilter } = useContext(Context);

  return (
    <>
      <div
        className={`${classes["filter-box"]} ${
          isOpenFilter ? classes["open"] : ""
        }`}
      >
        <p className={classes.text}>Date from</p>
        <div className={classes["data-picker"]}>
          <DatePicker
            selected={startDate}
            dateFormat="dd.MM.yyyy"
            /// @ts-ignore
            onChange={(date) => setStartDate(date)}
          />
        </div>
        <p className={classes.text}>Date to</p>
        <div className={classes["data-picker"]}>
          <DatePicker
            selected={endDate}
            dateFormat="dd.MM.yyyy"
            /// @ts-ignore
            onChange={(date) => setEndDate(date)}
          />
        </div>
      </div>
      <div
        className={`${classes["margin-top"]} ${
          isOpenFilter ? classes["open"] : ""
        }`}
      ></div>
    </>
  );
}
