import React from "react";
import "../styles/Book.css";

const Book = props => (
  <div id="book">
    <div className="row">
      <ul>
        {props.books.map((book, index) => (
          <li key={index}>
            <div className="row row-book">
              <div className="col-sm text-center">
                <h4>
                  {book.volumeInfo.title.length > 50
                    ? `${book.volumeInfo.title.slice(0, 50)}...`
                    : book.volumeInfo.title}
                </h4>
                <p>
                  {!book.volumeInfo.authors
                    ? ""
                    : book.volumeInfo.authors.length === 1
                    ? `author: ${book.volumeInfo.authors}`
                    : `authors: ${book.volumeInfo.authors}`}
                </p>
                <p>
                  <small>
                    {!book.volumeInfo.pageCount
                      ? ""
                      : `pages: ${book.volumeInfo.pageCount}`}
                  </small>
                </p>

                <p className="text-center">
                  <span>${book.price}</span>
                  <button
                    onClick={() => props.onClick(book, index)}
                    className="btn btn-sm btn-outline-success m-3"
                  >
                    buy
                  </button>
                </p>
              </div>

              <div className="col-sm col-img">
                <img
                  className="img-fluid"
                  alt={book.volumeInfo.title}
                  src={
                    !book.volumeInfo.imageLinks
                      ? ""
                      : `${book.volumeInfo.imageLinks.thumbnail}`
                  }
                />
              </div>
              <div className="col-sm ">
                <p>
                  {!book.volumeInfo.description
                    ? " "
                    : book.volumeInfo.description.length > 310
                    ? `${book.volumeInfo.description.slice(0, 310)}...`
                    : book.volumeInfo.description.slice(0, 310)}
                </p>
                {!book.volumeInfo.description ? (
                  ""
                ) : (
                  <p className="text-center">
                    <a
                      href={`${book.volumeInfo.infoLink}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="more-info-link text-center"
                    >
                      more info <i className="fas fa-external-link-alt" />
                    </a>
                  </p>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Book;
