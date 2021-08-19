import "./App.scss";
import "./styles/variables.scss";
import { NavBar } from "./components/navBar";
import { LoginBox } from "./components/loginBox";
import { useState, createContext } from "react";
import { Context } from "./context";
import { JogsBox } from "./components/jogsBox";

export default function App() {
  let [isOpenMenu, setIsOpenMenu] = useState(false);
  let [isOpenFilter, setIsOpenFilter] = useState(false);

  return (
    <Context.Provider
      value={{ isOpenMenu, setIsOpenMenu, isOpenFilter, setIsOpenFilter }}
    >
      <NavBar />
      {/* <LoginBox /> */}
      <JogsBox />
    </Context.Provider>
  );
}
