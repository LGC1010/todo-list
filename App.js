import TodoActions from './components/TodoActions.js';
import TodoCount from './components/TodoCount.js';
import TodoInput from './components/TodoInput.js';
import TodoList from './components/TodoList.js';
import { loadTodos, saveTodos } from './utils/storage.js';

function App() {
  let todos = loadTodos() || [];

  const setState = (nextTodos) => {
    todos = nextTodos;
    saveTodos(todos);
    render();
  };

  const render = () => {
    document.querySelector('#app').innerHTML = '';

    TodoCount({ todos });
    TodoInput({ onAdd });
    TodoList({ todos, onToggle, onDelete });
    TodoActions({ onClear, onCompleteAll });
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
