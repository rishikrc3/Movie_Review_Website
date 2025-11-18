import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const wishList = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default wishList;
