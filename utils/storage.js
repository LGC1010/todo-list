export const saveTodos = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

export const loadTodos = () => {
  return JSON.parse(localStorage.getItem('todos'));
};
