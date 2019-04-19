import React from "react";
import "../styles/BookItem.css";

const BookItem = props => (
  <div className="book-item">
    <div className="row">
      <ul>
        {props.books.map(book => (
          <li key={book.id}>
            <div className="row row-book">
              <div className="col-sm text-center">
                <h4>
                  {book.volumeInfo.title.length > 50
                    ? `${book.volumeInfo.title.slice(0, 50)}...`
                    : book.volumeInfo.title}
                </h4>
                <p>
                  {/* author: {book.volumeInfo.authors} */}
                  {!book.volumeInfo.authors
                    ? ""
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
                    onClick={() => props.onClick(book)}
                    className="btn btn-sm btn-outline-secondary m-3"
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
                    : book.volumeInfo.description.length > 300
                    ? `${book.volumeInfo.description.slice(0, 300)}...`
                    : book.volumeInfo.description.slice(0, 300)}
                </p>
                {book.volumeInfo.infoLink === undefined ? (
                  ""
                ) : (
                  <p className="text-center">
                    <a
                      href={`${book.volumeInfo.infoLink}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="more-info-link text-center"
                    >
                      more info{" "}
                      <sup>
                        <i className="fas fa-external-link-alt" />
                      </sup>
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

export default BookItem;
