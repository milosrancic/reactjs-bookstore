import React from "react";
import BookItem from "./Book";

const BookList = props => (
  <div className="book-list">
    {props.books.length > 0 ? (
      <BookItem books={props.books} onClick={props.onClick} />
    ) : (
      <h5>Please search for some book(s)</h5>
    )}
  </div>
);

export default BookList;
