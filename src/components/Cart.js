import React from "react";
import "../styles/Cart.css";

const Cart = props => (
  <div className="cart col-md-4">
    <small>total:</small> ${props.cart.toFixed(2)}
    {props.cart !== 0 ? (
      <button className="button cart-btn" type="button" onClick={props.onClick}>
        {" "}
        x{" "}
      </button>
    ) : (
      ""
    )}{" "}
  </div>
);

export default Cart;
