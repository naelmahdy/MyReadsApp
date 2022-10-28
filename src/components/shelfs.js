import React from "react";
import Book from "./book";

const Shelfs = ({ sectionName, books, category, changeShelf }) => {
  const bookCategory = books.filter((book) => book.shelf === category)
  // console.log('shelf');
  // console.log(books);
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{sectionName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {/* the books */}
          {/* {books.map((book) => (
            < Book key={book.id}  book={book} onUpdateShenf={onUpdateShenf} />
          ))} */}
          {/* {books} */}
          {bookCategory.map((book) => (
            < Book key={book.id} book={book} changeShelf={changeShelf} />
          ))}

          {/* < Book key={books.id} /> */}

        </ol>
      </div>
    </div>
  );
};

export default Shelfs;
