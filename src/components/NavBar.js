import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/books/All">Browse Books</Link></li>
        <li><Link to="/add-book">Add Book</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
