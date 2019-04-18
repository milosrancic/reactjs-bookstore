import React from "react";
import "../styles/BookList.css";
import BookItem from "./BookItem";

const BookList = props => (
  <div>
    {" "}
    <BookItem books={props.books} onClick={props.onClick} />{" "}
  </div>
);

export default BookList;

// MADE INTO FUNCTIONAL COMPONENT
