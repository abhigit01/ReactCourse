import React from 'react';
import { Provider } from 'react-redux';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <AddTodo />
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;
