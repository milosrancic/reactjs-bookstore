import React from "react";
import "../styles/BookList.css";
import Book from "./Book";

class BookList extends React.Component {
  render() {
    return (
      <div>
        <Book books={this.props.books} onClick={this.props.onClick} />
      </div>
    );
  }
}

export default BookList;
