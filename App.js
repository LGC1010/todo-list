import TodoActions from './components/TodoActions.js';
import TodoCount from './components/TodoCount.js';
import TodoInput from './components/TodoInput.js';
import TodoList from './components/TodoList.js';
import TodoTitle from './components/TodoTitle.js';
import { loadTodos, saveTodos } from './utils/storage.js';

function App() {
  let todos = loadTodos() || [];

  const setState = (nextTodos) => {
    todos = nextTodos;
    saveTodos(todos);
    render();
  };

  const render = () => {
    const app = document.querySelector('#app');
    app.innerHTML = '';

    const wrapBox = document.createElement('div');
    wrapBox.className = 'todo-wrapper';

    wrapBox.appendChild(TodoTitle());
    wrapBox.appendChild(TodoCount({ todos }));
    wrapBox.appendChild(TodoInput({ onAdd }));
    wrapBox.appendChild(TodoList({ todos, onToggle, onDelete, onEdit, setEditing }));
    wrapBox.appendChild(TodoActions({ onClear, onCompleteAll }));

    app.appendChild(wrapBox);
  };

  const onAdd = (name) => {
    const newTodo = { name, isCompleted: false };
    setState([...todos, newTodo]);
  };

  const onToggle = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setState(newTodos);
  };

  const onDelete = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setState(newTodos);
  };

  const onEdit = (index, newName) => {
    const newTodos = [...todos];
    newTodos[index].name = newName;
    setState(newTodos);
  };

  const setEditing = (index, isEditing) => {
    const newTodos = todos.map((todo, i) => (i === index ? { ...todo, isEditing } : todo));
    setState(newTodos);
  };

  const onClear = () => {
    setState([]);
  };

  const onCompleteAll = () => {
    const completeTodos = todos.map((todo) => ({ ...todo, isCompleted: true }));
    setState(completeTodos);
  };

  render();
}

export default App;
