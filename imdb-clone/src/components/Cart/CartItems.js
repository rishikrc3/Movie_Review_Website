import React from "react";

const CartItems = ({ item }) => {
  return (
    <>
      <div className="cart-item">
        <img
          src={item.Poster}
          alt={item.title}
          className="cart-item-image w-20 h-20 object-cover mr-4"
        />
        <div className="cart-item-details flex flex-col">
          <h3 className="text-lg font-semibold">{item.Title}</h3>
          <p className="text-sm">
            <span className="font-semibold">Director:</span> {item.Director}
            {item.Director}
          </p>
          <p className="text-sm">
            <span className="font-semibold">Genre:</span> {item.Genre}
          </p>
          <p className="text-sm">
            <span className="font-semibold">Released:</span> {item.Released}
          </p>
        </div>
      </div>
    </>
  );
};
export default CartItems;
