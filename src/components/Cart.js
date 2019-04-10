import React from "react";
import "../styles/Cart.css";

const Cart = props => (
  <div className="col-md-4 ">
    <p>
      <small>total:</small> ${props.cart.toFixed(2)}
    </p>
  </div>
);

export default Cart;
