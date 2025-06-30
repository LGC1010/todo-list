function TodoCount({ todos }) {
  const countBox = document.createElement('div');

  countBox.className = 'count-box';

  const total = todos.length;
  const completed = todos.filter((todo) => todo.isCompleted).length;

  countBox.innerHTML = `전체 ${total} / 완료 ${completed}`;

  return countBox;
}

export default TodoCount;
