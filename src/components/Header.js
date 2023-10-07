import { Fragment } from "react";
import logo from "../assets/logo.png";
import profileIcon from "../assets/profile.png";
import "./Header.css";
import LanguageSelector from "./LanguageSelector";
const Header = (props) => {
  return (
    <Fragment>
      <div className="header">
        <img className="logo" src={logo} alt="Logo" />
        <LanguageSelector />
        <img className="headerUserBtn" alt="userButton" src={profileIcon} />
      </div>
    </Fragment>
  );
};
export default Header;
