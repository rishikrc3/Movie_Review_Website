import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, removeItem } from "../Utils/cartSlice";
import CartItems from "./CartItems";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleRemoveItem = () => {
    dispatch(removeItem());
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  console.log(cartItems);
  return (
    <>
      <div className="cart">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Cart</h2>
        </div>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cartItems.map((item, index) => (
              <CartItems key={index} item={item} />
            ))}
            <button
              className=" bg-pink-300 text-white px-4 py-3 rounded-md transition duration-300 hover:bg-pink-500"
              onClick={handleRemoveItem}
            >
              Remove Item
            </button>
            <button
              className=" bg-pink-300 text-white px-4 py-3 rounded-md ml-4 transition duration-300 hover:bg-pink-500"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
