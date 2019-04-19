import React from "react";
import "../styles/Cart.css";

const Cart = props => (
  <div className="cart col-md-4">
    <small>total:</small> ${props.cart.toFixed(2)}
    <sup>
      {" "}
      {props.cart !== 0 ? (
        <button onClick={props.onClick}> x </button>
      ) : (
        ""
      )}{" "}
    </sup>
  </div>
);

export default Cart;
