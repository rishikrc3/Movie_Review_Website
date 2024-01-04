import React from "react";
import img from "./logo/logo.jpg";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={img} alt="logo-" />
      </div>

      <div className="nav-items"></div>
    </div>
  );
};

export default Header;
