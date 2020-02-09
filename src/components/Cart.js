import React from "react";
import "../styles/Cart.css";

const Cart = props => (
  <div className="container" id="cart">
    <h3>Cart</h3>
    <ol>
      {props.selectedBook.map((book, index) => (
        <li key={index}>
          <div className="row">
            <div className="col text-left">
              <span className="">
                {book.volumeInfo.title.length > 50
                  ? `${book.volumeInfo.title.slice(0, 50)}...`
                  : book.volumeInfo.title}
              </span>
              <span className="float-right">
                ${book.price}{" "}
                <span
                  className="delete-cart-item"
                  onClick={() => props.onClick(book, index)}
                >
                  x
                </span>{" "}
              </span>{" "}
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
    </ol>

    {props.totalCart > 0 && props.totalCart !== 0 ? (
      <p className="float-right total-parapraph">
        <small>total: </small>
        <strong>${props.totalCart.toFixed(2)}</strong>
      </p>
    ) : (
      <h6 className="mt-5">Your cart is empty! :(</h6>
    )}
  </div>
);

export default Cart;
