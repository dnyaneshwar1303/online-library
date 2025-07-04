import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi'];
  const popularBooks = [
    { id: '1', title: 'Dune' },
    { id: '2', title: '1984' },
  ];

  return (
    <div>
      <h1>Welcome to the Online Library</h1>
      <h2>Categories</h2>
      <ul>
        {categories.map((cat) => (
          <li key={cat}>
            <Link to={`/books/${cat}`}>{cat}</Link>
          </li>
        ))}
      </ul>

      <h2>Popular Books</h2>
      <ul>
        {popularBooks.map((book) => (
          <li key={book.id}>
            <Link to={`/book/${book.id}`}>{book.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
