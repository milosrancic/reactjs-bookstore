import React from "react";
import "../styles/BookList.css";
import BookItem from "./Book";

const BookList = props => (
  <div className="book-list">
    {" "}
    <BookItem books={props.books} onClick={props.onClick} />{" "}
  </div>
);

export default BookList;
