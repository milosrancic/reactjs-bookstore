import React from "react";
import axios from "axios";
import { Switch, Route } from "react-router-dom";

import "react-notifications-component/dist/theme.css";
import "../styles/App.css";

import ReactNotification from "react-notifications-component";
import SearchBar from "./SearchBar";
import Cart from "./Cart";
import BookList from "./BookList";
import Home from "./Home";

const API = "https://www.googleapis.com/books/v1/volumes?q=";
const KEY = "&key=AIzaSyCwQ3rWMLHOvgw4dwdmhPOXP5XyIeQBOuI";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      books: [],
      term: "",
      cart: 0,
      selectedBook: []
    };

    this.notificationDOMRef = React.createRef();
  }

  getRandomPrices = (min, max) => {
    return Number((Math.random() * (max - min) + min).toFixed(2));
  };

  onTermSubmit = term => {
    this.setState({ loading: true }, () => {
      axios
        .get(`${API}${term}${KEY}`)
        .then(res => {
          let books = res.data.items;
          books = books.map(bookObj => ({
            ...bookObj,
            price: this.getRandomPrices(2, 25)
          }));
          this.setState({
            // 'loading: false' after request completes
            loading: false,
            books: books
          });
        })
        .catch(error => {
          console.log(error);
        });
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
    console.log("book is added to cart");
    this.addNotification();
    this.setState({
      cart: book.price + this.state.cart,
      selectedBook: this.book
    });
  };

  handleClearCart = () => {
    this.setState({ cart: 0 });
  };

  addNotification = () => {
    this.notificationDOMRef.current.addNotification({
      message: "Book is added to cart!",
      type: "success",
      insert: "top",
      container: "top-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: { duration: 1500 },
      dismissable: { click: true, touch: true },
      isMobile: true
    });
  };

  render() {
    return (
      <div className="app container-fluid text-center">
        <div className="row align-items-center row-top">
          <ReactNotification ref={this.notificationDOMRef} />
          <SearchBar
            value={this.state.term}
            onFormSubmit={this.onFormSubmit}
            onInputChange={this.onInputChange}
          />
        </div>

        {/* {this.state.loading ? (
          <div className="loading-container">
            <i className="fa fa-spinner fa-spin" /> Loading...
          </div>
        ) : (
          <BookList books={this.state.books} onClick={this.handleAddToCart} />
        )} */}

        <Switch>
          {/* <Route exact path="/">
            <Home />
          </Route> */}

          <Route
            exact
            path="/"
            render={props => (
              <BookList
                books={this.state.books}
                onClick={this.handleAddToCart}
              />
            )}
          ></Route>

          <Route
            path="/cart"
            render={props => (
              <Cart
                cart={this.state.cart}
                onClick={this.handleClearCart}
                books={this.state.books}
                selectedBook={this.selectedBook}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
