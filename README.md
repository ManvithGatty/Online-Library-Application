# Online Library System

A fully functional **React + Redux** web application that simulates an online library where users can browse, search, and view detailed information about books. 

---

## Features

### Navigation & Routing
- Built with **React Router v6.4+** using `createBrowserRouter` and `Outlet`
- Includes routes for:
  - `/` — Home page
  - `/books` — Browse Books
  - `/book/:id` — Book Details
  - `/add` — Add a new book
  - `/error` — 404 Not Found

### Browse & Search Books
- Books are fetched from Redux state
- Real-time **search filtering** by title or author
- Displays each book as a styled card with:
  - Cover image
  - Title, author, and description
  - Star-based rating display

### Book Details Page
- Each book links to a `/book/:id` page with:
  - Larger cover display
  - Clean, detailed layout
  - Back navigation

### Add New Books
- Simple form to add books to the global Redux store
- Validates input fields
- Adds newly created books to the browse list

### State Management
- Global state managed using **Redux Toolkit**
- Books are stored and accessed from the Redux store
- Components subscribe via `useSelector` and dispatch actions to update state

### Styling
- Custom CSS using `styles.css`
- Responsive layouts and hover effects
- Clean and minimal UI with emphasis on readability

---

# Installation
## Clone the Repository
- https://github.com/ManvithGatty/Online-Library-Application.git
- cd Online-Library-Application

## Install Dependencies
- npm install

## Start the Development Server
- npm run dev

