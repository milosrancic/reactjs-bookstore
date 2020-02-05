import React from "react";
import "../styles/Cart.css";

const Cart = props => (
  <>
    <div>cart</div>
    {console.log("cart component:", props.cart.toFixed(2))}
    {console.log("selectedBook:", props.selectedBook)}
    <p>${props.cart.toFixed(2)}</p>

    {/* <div className="cart col-md-4"> */}

    {/* <small>total:</small> ${props.cart.toFixed(2)} */}
    {/* <small>total:</small> ${props.cart}
    {props.cart !== 0 ? (
      <button className="button cart-btn" type="button" onClick={props.onClick}>
        {" "}
        x{" "}
      </button>
    ) : (
      ""
    )}{" "} */}
    {/* </div> */}
  </>
);

export default Cart;
