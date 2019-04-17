import React from "react";
import axios from "axios";
import "../styles/App.css";
import SearchBar from "./SearchBar";
import Cart from "./Cart";
import BookList from "./BookList";

const API = "https://www.googleapis.com/books/v1/volumes?q=";
const KEY = "&key=AIzaSyCwQ3rWMLHOvgw4dwdmhPOXP5XyIeQBOuI";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      term: "",
      cart: 0,
      pickedBook: ""
    };
  }

  getRandomPrices = (min, max) => {
    return Number((Math.random() * (max - min) + min).toFixed(2));
  };

  onTermSubmit = term => {
    axios
      .get(`${API}${term}${KEY}`)
      .then(res => {
        let books = res.data.items;
        books = books.map(bookObj => ({
          ...bookObj,
          price: this.getRandomPrices(2, 25)
        }));
        this.setState({ books });
      })

      .catch(error => {
        console.log(error);
      });
  };

  onInputChange = e => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();

    this.onTermSubmit(this.state.term);
  };

  handleAddToCart = book => {
    console.log(`You've bought "${book.volumeInfo.title}" for $${book.price}`);

    this.setState({ cart: book.price + this.state.cart });
    // this.setState({ pickedBook: e, cart: e.price + this.state.cart });
  };

  render() {
    return (
      <div className="app container-fluid text-center">
        <div className="row align-items-center row-top">
          <SearchBar
            value={this.state.term}
            onFormSubmit={this.onFormSubmit}
            onInputChange={this.onInputChange}
          />

          <Cart
            cart={this.state.cart}
            title={this.state.title}
            pickedBook={this.state.pickedBook}
          />
        </div>

        <BookList books={this.state.books} onClick={this.handleAddToCart} />
      </div>
    );
  }
}

export default App;
