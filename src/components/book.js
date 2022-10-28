import React from "react";
import BookShelfChanger from "./bookShelfChanger";

const Book = ({ book, changeShelf }) => {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage:
                book.imageLinks ? `url(${book.imageLinks.smallThumbnail})` : 'none',
            }}
          ></div>
          <BookShelfChanger changeShelf={changeShelf} book={book} />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
        {/* <div className="book-authors">{book.shelf ? book.shelf : 'none'}</div> */}
      </div>
    </li>
  );
};

export default Book;
