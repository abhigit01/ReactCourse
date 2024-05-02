import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './actions';

const AddTodo = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch(addTodo(text));
    setText('');
  };

  return (
    <div>
      <h2>Add Todo</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleChange} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodo;
