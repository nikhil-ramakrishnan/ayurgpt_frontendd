import { Fragment } from "react";
import logo from "./assets/logo.png";
import profileIcon from "./assets/profile.png";
import "./Header.css";
import { Link } from "react-router-dom";
import LanguageSelector from "./components_ayurgpt/LanguageSelector";
const Header = (props) => {
  return (
    <Fragment>
      <div className="header">
        <img className="logo" src={logo} alt="Logo" />
        <div className="navigation">
          <Link to="/">AyurChat</Link>
          <Link to="/ayurhub">Ayurhub</Link>
        </div>
        <LanguageSelector />
        <img className="headerUserBtn" alt="userButton" src={profileIcon} />
      </div>
    </Fragment>
  );
};
export default Header;
