import { renderStars } from "../utils/renderStars.jsx";
import { Link } from "react-router-dom"; 

function Book(props) {
  const book = props.data;

  return (
    <Link to={`/book/${book.id}`} style={{ textDecoration: "none", color: "inherit" }}>
      <div className="book-card">
        <img
          className="book-img"
          src={book.coverImage}
          alt="Book Cover"
          height="200px"
        />
        <div className="book-details">
          <h2 className="book-title">{book.title}</h2>
          <p className="book-rating">{renderStars(book.rating)}</p>
          <h3 className="book-author">{book.author}</h3>
          <p className="book-desc">{book.description}</p>
        </div>
      </div>
    </Link>
  );
}

export default Book;
