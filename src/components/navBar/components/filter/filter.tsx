import classes from "./filter.module.scss";
import { useContext } from "react";
import { Context } from "../../../../context";

export function Filter({ className }: { className: string }) {
  let { isOpenFilter, setIsOpenFilter, setStartDate, setEndDate } =
    useContext(Context);

  return (
    <svg
      width="39px"
      height="39px"
      viewBox="0 0 39 39"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={() => {
        setIsOpenFilter(!isOpenFilter);
        if (isOpenFilter) {
          setStartDate(null);
          setEndDate(null);
        }
      }}
    >
      <g
        id="02"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        transform="translate(-1371.000000, -39.000000)"
      >
        <g id="filter_active" transform="translate(1371.000000, 39.000000)">
          <path
            d="M32.8138186,8.83006811 C32.6050137,8.35216718 32.24367,8.11317647 31.7283387,8.11317647 L8.19544092,8.11317647 C7.68067311,8.11317647 7.31908797,8.35216718 7.110605,8.83006811 C6.90244401,9.33252012 6.98801058,9.76172136 7.36810965,10.1170279 L16.4323697,19.1809659 L16.4323697,28.1162724 C16.4323697,28.4354365 16.5486855,28.7108916 16.7817196,28.9441672 L21.488122,33.6503282 C21.7088403,33.8829598 21.9846174,34 22.3154533,34 C22.4625988,34 22.615701,33.9691703 22.7751623,33.9078328 C23.2530632,33.6993498 23.4923759,33.3377647 23.4923759,32.8229969 L23.4923759,19.1812879 L32.5562335,10.1170279 C32.9364131,9.76172136 33.0218991,9.33284211 32.8138186,8.83006811 Z"
            className={classes.transition}
            fill={isOpenFilter ? "#62AA14" : "#FFF"}
          ></path>
          <rect
            id="Rectangle-3"
            className={classes.transition}
            stroke={isOpenFilter ? "#62AA14" : "transparent"}
            strokeWidth="2"
            x="1"
            y="1"
            width="37"
            height="37"
            rx="6"
          ></rect>
        </g>
      </g>
    </svg>
  );
}
