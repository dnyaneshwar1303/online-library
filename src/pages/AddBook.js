import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/booksSlice';
import { useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';

function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: '',
    author: '',
    description: '',
    category: '',
    rating: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const errs = {};
    Object.keys(form).forEach((key) => {
      if (!form[key]) errs[key] = `${key} is required.`;
    });
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
    } else {
      dispatch(addBook({ ...form, id: nanoid() }));
      navigate('/books/All');
    }
  };

  return (
    <div>
      <h1>Add a New Book</h1>
      <form onSubmit={handleSubmit}>
        {['title', 'author', 'description', 'category', 'rating'].map((field) => (
          <div key={field}>
            <input
              type={field === 'rating' ? 'number' : 'text'}
              name={field}
              placeholder={field}
              value={form[field]}
              onChange={handleChange}
            />
            {errors[field] && <p style={{ color: 'red' }}>{errors[field]}</p>}
          </div>
        ))}
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;
