import React from "react";
import "../styles/Cart.css";

const Cart = props => (
  <div className="cart col-md-4">
    cart
    {/* <small>total:</small> ${props.cart.toFixed(2)} */}
    <small>total:</small> ${props.cart}
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
