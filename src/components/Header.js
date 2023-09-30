import { Fragment } from "react";
import logo from "../assets/logo.png";
import profileIcon from "../assets/profile.png";
import "./Header.css";
const Header = (props) => {
  return (
    <Fragment>
      <div className="header">
        <img className="logo" src={logo} alt="Logo" />

        <img className="headerUserBtn" alt="userButton" src={profileIcon} />
      </div>
    </Fragment>
  );
};
export default Header;
