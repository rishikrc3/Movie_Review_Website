import React from "react";
import img from "../logo/logo.jpg";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={img} alt="logo-" />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>New Movies</li>
          <li>About Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
