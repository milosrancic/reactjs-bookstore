import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "react-notifications-component/dist/theme.css";
import "../styles/App.css";

import ReactNotification from "react-notifications-component";
import SearchBar from "./SearchBar";
import Cart from "./Cart";
import BookList from "./BookList";

const API = "https://www.googleapis.com/books/v1/volumes?q=";
const KEY = "&key=AIzaSyCwQ3rWMLHOvgw4dwdmhPOXP5XyIeQBOuI";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      books: [],
      term: "",
      cart: 0
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
    console.log("added to cart");
    this.addNotification();
    this.setState({ cart: book.price + this.state.cart });
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
      <Router>
        <ul className="nav justify-content-center  ">
          <li className="nav-item">
            <Link to={"/"} className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/cart"} className="nav-link">
              Cart
            </Link>
          </li>
        </ul>

        <div className="app container-fluid text-center">
          <div className="row align-items-center row-top">
            <ReactNotification ref={this.notificationDOMRef} />
            <SearchBar
              value={this.state.term}
              onFormSubmit={this.onFormSubmit}
              onInputChange={this.onInputChange}
            />

            <Cart cart={this.state.cart} onClick={this.handleClearCart} />
          </div>

          {this.state.loading ? (
            <div className="loading-container">
              <i className="fa fa-spinner fa-spin" /> Loading...
            </div>
          ) : (
            <BookList books={this.state.books} onClick={this.handleAddToCart} />
          )}
        </div>

        <Switch>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
