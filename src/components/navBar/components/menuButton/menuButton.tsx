import { Dispatch, SetStateAction } from "react";
import classes from "./menuButton.module.scss";

export function MenuButton({
  className,
  isOpenMenu,
  setIsOpenMenu,
}: {
  className: string;
  isOpenMenu: boolean;
  setIsOpenMenu: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div
      className={`${classes["menu-btn"]} ${
        isOpenMenu ? classes.open : ""
      } ${className}`}
      onClick={() => {
        setIsOpenMenu(!isOpenMenu);
      }}
    >
      <div className={classes["menu-btn__burger"]}></div>
    </div>
  );
}
