import React from "react";
import { Link } from "react-router-dom";
import Shelfs from "./shelfs";
const Home = ({ books, changeShelf }) => {

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {/* the book shelfs */}
          <Shelfs sectionName="Curretly Reading" books={books} category='currentlyReading' changeShelf={changeShelf} />
          <Shelfs sectionName="Want To Read" books={books} category='wantToRead' changeShelf={changeShelf} />
          <Shelfs sectionName="Read" books={books} category='read' changeShelf={changeShelf} />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

export default Home;
