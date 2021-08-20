import classes from "./filterBox.module.scss";
import { useContext } from "react";
import { Context } from "../../../../context";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function FilterBox() {
  let { isOpenFilter, startDate, setStartDate, endDate, setEndDate } =
    useContext(Context);

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
