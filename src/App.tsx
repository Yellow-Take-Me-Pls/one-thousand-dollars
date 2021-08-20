import "./App.scss";
import "./styles/variables.scss";
import { NavBar } from "./components/navBar";
import { LoginBox } from "./components/loginBox";
import { useState } from "react";
import { Context } from "./context";
import { JogsBox } from "./components/jogsBox";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

export default function App() {
  let [isOpenMenu, setIsOpenMenu] = useState(false);
  let [isOpenFilter, setIsOpenFilter] = useState(false);
  let [accessToken, setAccessToken] = useState(
    localStorage.getItem("access_token")
  );

  return (
    <Context.Provider
      value={{
        isOpenMenu,
        setIsOpenMenu,
        isOpenFilter,
        setIsOpenFilter,
        accessToken,
        setAccessToken,
      }}
    >
      <BrowserRouter>
        <NavBar />
        {!accessToken && <Redirect to="/" />}
        {(accessToken && window.location.pathname.length <= 1) && <Redirect to="/jogs" />}
        <Route exact path="/" component={LoginBox} />
        <Route exact path="/jogs" component={JogsBox} />
      </BrowserRouter>
    </Context.Provider>
  );
}
