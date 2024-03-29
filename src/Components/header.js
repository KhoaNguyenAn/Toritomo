import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import Forum from "@material-ui/icons/Forum"
import "./header.css";
import AboutBackgroundImage from "../Assets/about-background-image.png";


function Header() {
  return (
    <div className="header__container">
      <IconButton>
        <PersonIcon fontSize="large" className="header_icon"/>
      </IconButton>
     
      <img className="header_logo" src={AboutBackgroundImage} alt="logo_image" />

      <IconButton>
        <Forum fontSize="large" className="header_icon"/>
      </IconButton>
    </div>
  )
}
export default Header;