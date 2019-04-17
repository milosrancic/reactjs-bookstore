import React from "react";
import "../styles/Cart.css";

class Cart extends React.Component {
  render() {
    const books = this.props.cart;
    // let id = books.id;
    // let price = books.price;
    // console.log(`price ${price} `);
    // console.log(`id ${id} `);
    return (
      <div className="col-md-4 ">
        <small>total:</small> ${this.props.cart.toFixed(2)}
      </div>
    );
  }
}

export default Cart;
