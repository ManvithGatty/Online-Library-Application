import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function BookDetails() {
  const { id } = useParams();
  const books = useSelector((state) => state.books);

  const book = books.find((b) => String(b.id) === String(id));

  if (!book) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2>404 - Book Not Found</h2>
        <Link to="/books">← Back to Browse</Link>
      </div>
    );
  }

  return (
    <div className="book-details-page">
      <img src={book.coverImage} alt="Book Cover" />
      <div className="book-details">
        <h2 className="book-title">{book.title}</h2>
        <h3 className="book-author">{book.author}</h3>
        <p className="book-rating">Rating: {book.rating} ★</p>
        <p className="book-desc">{book.description}</p>
        <br />
        <Link to="/books">← Back to Browse</Link>
      </div>
    </div>
  );
}

export default BookDetails;
