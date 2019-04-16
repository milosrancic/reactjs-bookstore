import React from "react";
import "../styles/Cart.css";

class Cart extends React.Component {
  render() {
    let id,
      price,
      title = undefined;
    // for (let i of this.props.pickedBook) {
    //   id = i.id;
    //   price = i.price;
    //   title = i.volumeInfo.title;
    // }
    console.log(this.props.pickedBook.price);
    // console.log(id, title, price);
    return (
      <div className="col-md-4 ">
        <small>total:</small> ${this.props.cart.toFixed(2)}
        {/* ${this.props.cart.toFixed(2)} */}
      </div>
    );
  }
}

export default Cart;
