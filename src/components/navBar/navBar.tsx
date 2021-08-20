import classes from "./navBar.module.scss";
import { Logo } from "./components/logo";
import { Filter } from "./components/filter";
import { MenuButton } from "./components/menuButton";
import { useContext, useLayoutEffect, useState } from "react";
import { Context } from "../../context";
import { NavLink, Route } from "react-router-dom";

export function NavBar() {
  let { isOpenMenu, setIsOpenMenu, accessToken } = useContext(Context);
  let [currentPath, setCurrentPath] = useState(
    window.location.pathname.replace(/-/g, " ").replace(/\//, "").toUpperCase()
  );

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
        {accessToken && (
          <div className={classes["control-buttons-box"]}>
            <div
              className={classes["control-buttons"]}
              onClick={(e) => {
                /// @ts-ignore
                setCurrentPath(e.target.innerText);
              }}
            >
              <NavLink to="/jogs">
                <p className={currentPath === "JOGS" ? classes.open : ""}>
                  jogs
                </p>
              </NavLink>
              <NavLink to="/info">
                <p className={currentPath === "INFO" ? classes.open : ""}>
                  info
                </p>
              </NavLink>
              <NavLink to="/contact-us">
                <p className={currentPath === "CONTACT US" ? classes.open : ""}>
                  contact us
                </p>
              </NavLink>
            </div>
            {!isOpenMenu && (
              <Route
                exact
                path="/jogs"
                render={() => <Filter className={classes.filter} />}
              />
            )}
            <MenuButton
              className={classes["menu-button"]}
              isOpenMenu={isOpenMenu}
              setIsOpenMenu={setIsOpenMenu}
            />
          </div>
        )}
      </div>

      <div className={classes["menu-buttons-box"]}>
        <div
          className={classes["menu-buttons"]}
          onClick={(e) => {
            setIsOpenMenu(false);
            /// @ts-ignore
            setCurrentPath(e.target.innerText);
          }}
        >
          <NavLink to="/jogs">
            <p className={currentPath === "JOGS" ? classes.open : ""}>jogs</p>
          </NavLink>
          <NavLink to="/info">
            <p className={currentPath === "INFO" ? classes.open : ""}>info</p>
          </NavLink>
          <NavLink to="/contact-us">
            <p className={currentPath === "CONTACT US" ? classes.open : ""}>
              contact us
            </p>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
