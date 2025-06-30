function TodoInput({ onAdd }) {
  const todoForm = document.createElement('form');
  todoForm.className = 'todo-form';

  todoForm.innerHTML = `
    <input
      type="text"
      id="todo-input"
      autocomplete="off"
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

  return todoForm;
}

export default TodoInput;
