import React from "react";
// import img from '../logo/logo'
import { Link } from "react-router-dom";
//import { useSelector } from "react-redux";
const Header : React.FC = () => {
  //subscribing to the times.
  //const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex items-center justify-between p-4 m-1  bg-pink-300 shadow-xl">
      <div className="w-40">
        <Link to="/">
          <img src={"ad"} alt="logo-" className="cursor-pointer" />
        </Link>
      </div>

      <div className="nav-items">
        <ul className="flex space-x-4 ">
          <li>
            <Link
              to="/"
              className="custom-link text-white font-semibold text-lg"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="custom-link text-white font-semibold text-lg"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contactus"
              className="custom-link text-white font-semibold text-lg"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="custom-link text-white font-semibold text-lg"
            >
              Wish List🛒0
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
