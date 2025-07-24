import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setBooks } from "./redux/bookSlice";
import { books } from "./utils/bookData";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setBooks(books));
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
