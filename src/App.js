import "./App.css";
import React, { useEffect, useState } from "react";
import Home from "./components/home";
import Search from "./components/search";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { getAll, update, search as BooksAPIsearch } from "./BooksAPI";

function App() {
  let [books, setBooks] = useState([]);
  let [search, setSearch] = useState('');
  let [searchBooks, setSearchBooks] = useState([]);
  let [flag, setFlag] = useState(false);
  let [loadSearch, setLoadSearch] = useState(false);
  const getAllBooks = () => {
    getAll().then((books) => {
      setBooks(books);
    });
  }
  const changeShelf = async (book, shelf) => {

    await update(book, shelf)
    await getAllBooks();
    handleBookSearch(search)
    setFlag(!flag)
  }
  useEffect(() => {
    getAllBooks();
  }, []);
  const handleSearch = async (event) => {
    await setSearch(event.target.value)
    handleBookSearch(search)
    setFlag(true)
    // console.log(search);
  }
  const handleBookSearch = async (search2) => {
    await BooksAPIsearch(search2).then((res) => {
      if (res && !res.error) {
        setLoadSearch(true)
        setSearchBooks(res.map((bookSearch) => {
          books.forEach((book) => {
            if (bookSearch.id === book.id) {
              bookSearch.shelf = book.shelf
            }

          }

          )
          return bookSearch;
        }
        ))
      } else {
        // setSearchBooks('No Books')
        // setLoadSearch('eee')
      }
      // console.log(res);
      // console.log(setSearchBooks);
    })
  }
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home books={books} flag={flag} changeShelf={changeShelf} />} />
          <Route path="/Search" element={<Search handleSearch={handleSearch} search={search} searchBooks={searchBooks} changeShelf={changeShelf} loadSearch={loadSearch} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
