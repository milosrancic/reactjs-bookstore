import React from "react";
import axios from "axios";
import { Switch, Route } from "react-router-dom";

import "react-notifications-component/dist/theme.css";
import "../styles/App.scss";

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
      totalCart: 0,
      selectedBook: []
    };

    this.notificationDOMRef = React.createRef();
  }

  getRandomPrices = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  onTermSubmit = term => {
    this.setState({ loading: true }, () => {
      axios
        .get(`${API}${term}${KEY}`)
        .then(res => {
          let books = res.data.items;
          books = books.map(bookObj => ({
            ...bookObj,
            price: this.getRandomPrices(3, 17)
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
    this.addNotification();

    this.setState(prevState => ({
      totalCart: prevState.totalCart + book.price,
      selectedBook: [...prevState.selectedBook, book]
    }));
  };

  handleDeleteCartItem = (book, index) => {
    let filteredBooks = [...this.state.selectedBook];
    filteredBooks.splice(index, 1);

    this.setState(prevState => ({
      totalCart: prevState.totalCart - book.price,
      selectedBook: filteredBooks
    }));
  };

  addNotification = () => {
    this.notificationDOMRef.current.addNotification({
      message: "Book is added to cart!",
      type: "info",
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
      <div className="app container text-center">
        <div className="row align-items-center">
          <ReactNotification ref={this.notificationDOMRef} />
          <SearchBar
            value={this.state.term}
            onFormSubmit={this.onFormSubmit}
            onInputChange={this.onInputChange}
          />
        </div>

        <Switch>
          {this.state.loading ? (
            <>
              <div className="loading-container">
                <i className="fa fa-spinner fa-spin" /> Loading...
              </div>
            </>
          ) : (
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
          )}

          <Route
            path="/cart"
            render={props => (
              <Cart
                totalCart={this.state.totalCart}
                selectedBook={this.state.selectedBook}
                onClick={this.handleDeleteCartItem}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
