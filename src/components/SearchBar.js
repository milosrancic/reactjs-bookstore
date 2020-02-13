import React from "react";
import { Link } from "react-router-dom";
import "../styles/SearchBar.scss";

const SearchBar = props => (
  <nav id="navbar" className="container-fluid mb-5 p-0">
    <ul
      className="nav justify-content-center flex-column flex-sm-row
"
    >
      <li className="nav-item">
        <Link to={"/"} className="nav-link">
          <p className="title-p">books</p>
        </Link>
      </li>

      <li className="nav-item">
        <form
          onSubmit={props.onFormSubmit}
          className="form-inline justify-content-center"
        >
          <input
            value={props.value}
            onChange={props.onInputChange}
            className="form-control form-control-sm mr-3 w-75"
            type="text"
            placeholder="Search for book"
            aria-label="Search"
            required
          />
          <button type="submit" className="btn btn-sm btn-outline-info">
            <i className="fas fa-search" aria-hidden="true" />
          </button>
        </form>
      </li>

      <li className="nav-item">
        <Link to={"/cart"} className="nav-link">
          <i className="fas fa-shopping-cart"></i>
        </Link>
      </li>
    </ul>
  </nav>
);

export default SearchBar;
