import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function BrowseBooks() {
  const { category } = useParams();
  const books = useSelector((state) => state.books);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBooks = books.filter((book) => {
    const matchesCategory = category === 'All' || book.category === category;
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          book.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <h1>Browse Books - {category}</h1>
      <input
        type="text"
        placeholder="Search by title or author..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredBooks.map((book) => (
          <li key={book.id}>
            <strong>{book.title}</strong> by {book.author} – 
            <Link to={`/book/${book.id}`}> View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BrowseBooks;
