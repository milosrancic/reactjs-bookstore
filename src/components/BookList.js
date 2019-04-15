import React from "react";
import "../styles/BookList.css";
import BookItem from "./BookItem";

class BookList extends React.Component {
  render() {
    return (
      <div>
        <BookItem books={this.props.books} onClick={this.props.onClick} />
      </div>
    );
  }
}

export default BookList;
