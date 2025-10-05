import Header from "./Header/Header";
import ContactUs from "./Routes/ContactUs";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import wishList from "./Utils/useWishListStore";
import Navbar from "./Header/Navbar";
import React from "react";
function App() {
  return (
    <>
      <Provider store={wishList}>
        <Navbar />
        <Outlet />
      </Provider>
    </>
  );
}

export default App;
