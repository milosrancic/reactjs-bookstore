import React from "react";
import "../styles/Cart.css";

const Cart = props => (
  <div className="container-fluid">
    <h4>Cart</h4>
    <ul>
      {props.selectedBook.map((book, index) => (
        <li key={index}>
          <div className="row">
            <div className="col">
              <p>
                <span className="float-left">
                  -{" "}
                  {book.volumeInfo.title.length > 50
                    ? `${book.volumeInfo.title.slice(0, 50)}...`
                    : book.volumeInfo.title}
                </span>
                <span className="float-right">${book.price}</span>
              </p>
              {/* <p>
                {!book.authors
                  ? ""
                  : book.authors.length === 1
                  ? `author: ${book.authors}`
                  : `authors: ${book.authors}`}
              </p> */}
            </div>
          </div>
        </li>
      ))}
    </ul>
    <p className="float-right total-parapraph">
      <small>total:</small> ${props.totalCart.toFixed(2)}
    </p>
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
  </div>
);

export default Cart;
