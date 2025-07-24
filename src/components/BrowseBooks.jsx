import { useSelector } from "react-redux";
import Book from "./Book.jsx";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function BrowseBooks() {
  const books = useSelector((state) => state.books);
  const [search, setSearch] = useState("");
  const location = useLocation();

  const filteredBooks = books.filter((book) => {
    const searchLower = search.toLowerCase();
    return (
      book.title.toLowerCase().includes(searchLower) ||
      book.author.toLowerCase().includes(searchLower)
    );
  });

  const showSearchBar = location.pathname === "/books";

  return (
    <>
      {showSearchBar && (
        <div style={{ textAlign: 'center', margin: '20px' }}>
          <input
            type="text"
            placeholder="Search by title or author"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ padding: "10px", width: "50%", fontSize: "1em" }}
          />
        </div>
      )}

      {filteredBooks.length === 0 ? (
        <h2 style={{ textAlign: "center", marginTop: "50px" }}>
          404 - Book Not Found
        </h2>
      ) : (
        <div className="book-list">
          {filteredBooks.map((book) => (
            <Book key={book.id} data={book} />
          ))}
        </div>
      )}
    </>
  );
}

export default BrowseBooks;
