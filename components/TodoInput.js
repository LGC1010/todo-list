function TodoInput({ onAdd }) {
  const todoForm = document.createElement('form');
  todoForm.className = 'todo-input';

  todoForm.innerHTML = `
    <input
      type="text"
      id="todo-input"
      placeholder="할 일을 입력하세요"
    />
    <button type="submit">추가</button>
  `;

  const input = todoForm.querySelector('#todo-input');

  todoForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const value = input.value.trim();
    if (value === '') return;
    onAdd(value);
    input.value = '';
  });

  document.querySelector('#app').appendChild(todoForm);
}

export default TodoInput;
