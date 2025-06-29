function TodoList({ todos, onToggle, onDelete }) {
  const todoList = document.createElement('ul');
  todoList.className = 'todo-list';

  if (todos.length === 0) {
    todoList.innerHTML = `<li class="empty">등록된 할 일이 없습니다.</li>`;
  } else {
    todoList.innerHTML = todos
      .map(
        (todo, index) => `
          <li class="todo-item">
            <p
              class="todo-name ${todo.isCompleted ? 'completed' : ''}" 
              data-index="${index}"
              data-action="toggle"
            >
              ${todo.name}
            </p>
            <button class="delete-btn" data-index="${index}" data-action="delete">삭제</button>
          </li>
        `
      )
      .join('');
  }

  todoList.addEventListener('click', (e) => {
    const action = e.target.dataset.action;
    const index = Number(e.target.dataset.index);
    if (action === 'toggle') {
      onToggle(index);
    }

    if (action === 'delete') {
      onDelete(index);
    }
  });

  document.querySelector('#app').appendChild(todoList);
}

export default TodoList;
