import React from "react";
import Book from "./book";
// import { useState } from "react";
import { Link } from "react-router-dom";
const Search = ({ search, handleSearch, searchBooks, changeShelf, loadSearch }) => {
  console.log('searchBooks', searchBooks);
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title, author, or ISBN" onChange={handleSearch} />
        </div>
      </div>
      {/* ---------------------------------------------------------------------------------------- */}
      <div className="search-books-results">
        <div className="books-grid">
          {
            loadSearch ? searchBooks ? searchBooks?.map((book) => (<Book key={book.id} book={book} changeShelf={changeShelf} />)) : null :

              <div>'no books'</div>
          }
          {

            // <span>{searchBooks}</span>
          }
        </div>
      </div>
    </div>
  );
};

export default Search;
