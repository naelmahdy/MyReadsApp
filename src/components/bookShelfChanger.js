import React from 'react'

const BookShelfChanger = ({ changeShelf, book }) => {
  const updateShelf = (event) => {
    changeShelf(book, event.target.value)

  }
  return (
    <div className="book-shelf-changer">
      <select onChange={updateShelf} value={book.shelf ? book.shelf : 'None'}>
        <option value="none" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="None">None</option>
      </select>
    </div>
  )
}

export default BookShelfChanger