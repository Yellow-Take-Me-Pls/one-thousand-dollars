import "./App.scss";
import "./styles/variables.scss";
import { NavBar } from "./components/navBar";
import { LoginBox } from "./components/loginBox";
import { useState } from "react";
import { Context } from "./context";
import { JogsBox } from "./components/jogsBox";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { ChangeBox } from "./components/changeBox";
import { ChangeBoxType } from "./types/changeBoxType";
import { InfoBox } from "./components/infoBox";
import { ContactUsBox } from "./components/contactUsBox/contactUsBox";

export default function App() {
  let [isOpenMenu, setIsOpenMenu] = useState(false);
  let [isOpenFilter, setIsOpenFilter] = useState(false);
  let [accessToken, setAccessToken] = useState(
    localStorage.getItem("access_token")
      ? JSON.parse(localStorage.getItem("access_token")!)
      : undefined
  );
  let [jogs, setJogs] = useState();
  let [startDate, setStartDate] = useState(null);
  let [endDate, setEndDate] = useState(null);
  let [selectedJog, setSelectedJog] = useState();

  return (
    <Context.Provider
      value={{
        isOpenMenu,
        setIsOpenMenu,
        isOpenFilter,
        setIsOpenFilter,
        accessToken,
        setAccessToken,
        jogs,
        setJogs,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        selectedJog,
        setSelectedJog,
      }}
    >
      <BrowserRouter>
        <NavBar />
        {!accessToken && <Redirect to="/" />}
        {accessToken && window.location.pathname.length <= 1 && (
          <Redirect to="/jogs" />
        )}
        <Route exact path="/" component={LoginBox} />
        <Route exact path="/jogs" component={JogsBox} />
        <Route exact path="/info" component={InfoBox} />
        <Route exact path="/contact-us" component={ContactUsBox} />
        <Route
          exact
          path="/jogs/add"
          render={() => <ChangeBox boxType={ChangeBoxType.ADD} />}
        />
        <Route
          exact
          path="/jogs/edit"
          render={() => <ChangeBox boxType={ChangeBoxType.EDIT} />}
        />
      </BrowserRouter>
    </Context.Provider>
  );
}
