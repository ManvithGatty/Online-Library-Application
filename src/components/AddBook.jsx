import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/bookSlice";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    rating: "",
    description: "",
    coverImage: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const filled = Object.values(formData).every((v) => v.trim() !== "");
    if (!filled) return alert("Please fill out all fields.");

    const newBook = {
      ...formData,
      id: Date.now(),
    };

    dispatch(addBook(newBook));
    navigate("/books");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 style={{textAlign : "center", padding : '20px'}}>Add a Book</h1>
      <input name="title" placeholder="Title" onChange={handleChange} />
      <input name="author" placeholder="Author" onChange={handleChange} />
      <input name="rating" placeholder="Rating (1-5)" onChange={handleChange} />
      <input name="coverImage" placeholder="Cover Image URL" onChange={handleChange} />
      <textarea name="description" placeholder="Description" onChange={handleChange} />
      <button type="submit">Add Book</button>
    </form>
  );
}

export default AddBook;
