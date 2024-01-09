import React from "react";
import img from "../logo/logo.jpg";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <img src={img} alt="logo-" />
        </Link>
      </div>

      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
          <li>Bucket List</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
