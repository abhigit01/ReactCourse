let nextTodoId = 0;

export const addTodo = (text) => ({
  type: 'ADD_TODO',
  payload: {
    id: nextTodoId++,
    text
  }
});
