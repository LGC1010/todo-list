import TodoInput from './components/TodoInput.js';
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

    TodoInput({ onAdd });
  };

  const onAdd = (name) => {
    const newTodo = { name, isCompleted: false };
    setState([...todos, newTodo]);
  };

  render();
}

export default App;
