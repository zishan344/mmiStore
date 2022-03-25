import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  const { img, name } = cart;
  console.log(cart);
  return (
    <div>
      <div className="cart-info">
        <img src={img} alt="" />
        <h5>Book Name: {name}</h5>
      </div>
    </div>
  );
};

export default Cart;
