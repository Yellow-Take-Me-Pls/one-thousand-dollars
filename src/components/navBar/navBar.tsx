import classes from "./navBar.module.scss";
import { Logo } from "./components/logo";
import { Filter } from "./components/filter";
import { MenuButton } from "./components/menuButton";
import { useContext, useLayoutEffect } from "react";
import { Context } from "../../context";

export function NavBar() {
  let { isOpenMenu, setIsOpenMenu } = useContext(Context);
  
  useLayoutEffect(() => {
    function closeMenu() {
      setIsOpenMenu(false);
    }
    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  return (
    <div className={`${classes["nav-bar"]} ${isOpenMenu ? classes.open : ""}`}>
      <div className={classes.menu}>
        <Logo className={classes.logo} isMenuOpen={isOpenMenu} />
        <div className={classes["control-buttons-box"]}>
          <div className={classes["control-buttons"]}>
            <p>jogs</p>
            <p>info</p>
            <p>contact us</p>
          </div>
          {!isOpenMenu && <Filter className={classes.filter} />}
          <MenuButton
            className={classes["menu-button"]}
            isOpenMenu={isOpenMenu}
            setIsOpenMenu={setIsOpenMenu}
          />
        </div>
      </div>
      <div className={classes["menu-buttons-box"]}>
        <div className={classes["menu-buttons"]}>
          <p>jogs</p>
          <p>info</p>
          <p>contact us</p>
        </div>
      </div>
    </div>
  );
}
