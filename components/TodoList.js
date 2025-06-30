function TodoList({ todos, onToggle, onDelete, onEdit, setEditing }) {
  const todoList = document.createElement('ul');
  todoList.className = 'todo-list';

  if (todos.length === 0) {
    todoList.innerHTML = `<li class="empty">등록된 할 일이 없습니다.</li>`;
  } else {
    todoList.innerHTML = todos
      .map(
        (todo, index) => `
          <li class="todo-item">
          <input type="checkbox" data-index="${index}" data-action="edit" ${todo.isEditing ? 'checked' : ''} />
            <p
              class="todo-name ${todo.isCompleted ? 'completed' : ''}" 
              data-index="${index}"
              data-action="toggle"
            >
              ${todo.name}
            </p>
            ${
              todo.isEditing
                ? `
              <input 
                type="text" 
                value="${todo.name}" 
                data-index="${index}" 
                data-action="edit-title"
                ${todo.isCompleted ? 'readonly' : ''}
                class="${todo.isCompleted ? 'completed' : ''}"
              />`
                : ''
            }
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

  todoList.addEventListener('change', (e) => {
    const action = e.target.dataset.action;
    const index = Number(e.target.dataset.index);

    if (action === 'edit') {
      setEditing(index, e.target.checked);
    }

    if (action === 'edit-title') {
      onEdit(index, e.target.value);
    }
  });

  return todoList;
}

export default TodoList;
