import React from 'react';
import { useSelector } from 'react-redux';

const TodoList = () => {
  const todos = useSelector(state => state.todos);

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
