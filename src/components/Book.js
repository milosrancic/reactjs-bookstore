import React from "react";
import "../styles/Book.css";

class Book extends React.Component {
  render() {
    const books = this.props.books;
    return (
      <div className="row">
        <ul>
          {books.map(book => (
            <li key={book.id}>
              <div className="row row-book">
                <div className="col-sm text-center">
                  <h4>
                    {book.volumeInfo.title.length > 50
                      ? `${book.volumeInfo.title.slice(0, 50)}...`
                      : book.volumeInfo.title}
                  </h4>
                  <p>author: {book.volumeInfo.authors}</p>
                  <p>
                    <small>
                      {book.volumeInfo.pageCount === undefined
                        ? ""
                        : `pages: ${book.volumeInfo.pageCount}`}
                    </small>
                  </p>

                  <p className="text-center">
                    <span>${book.price}</span>
                    <button
                      onClick={() => this.props.onClick(book.price)}
                      className="btn btn-sm btn-outline-secondary m-3"
                    >
                      buy
                    </button>
                  </p>
                </div>

                <div className="col-sm col-img">
                  <img
                    className="img-fluid "
                    src={book.volumeInfo.imageLinks.thumbnail}
                    alt=""
                  />
                </div>
                <div className="col-sm ">
                  <p>
                    {book.volumeInfo.description === undefined
                      ? " "
                      : book.volumeInfo.description.length > 300
                      ? `${book.volumeInfo.description.slice(0, 300)}...`
                      : book.volumeInfo.description.slice(0, 300)}
                  </p>
                  <p className="text-center ">
                    <a
                      href={`${book.volumeInfo.infoLink}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="this-edit"
                    >
                      more info
                    </a>
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Book;
