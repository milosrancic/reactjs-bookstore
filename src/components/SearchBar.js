import React from "react";
import "../styles/SearchBar.css";

const SearchBar = props => (
  <React.Fragment>
    <div className="col-md-4 ">
      <h2>books</h2>
    </div>

    <div className="col-md-4 ">
      <form
        onSubmit={props.onFormSubmit}
        className="form-inline justify-content-center "
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
        <button type="submit" className="btn btn-sm btn-outline-success">
          <i className="fas fa-search" aria-hidden="true" />
        </button>
      </form>
    </div>
  </React.Fragment>
);

export default SearchBar;
