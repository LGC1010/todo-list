function TodoActions({ onClear, onCompleteAll }) {
  const actionBox = document.createElement('div');

  actionBox.className = 'action-box';

  actionBox.innerHTML = `
    <button id="complete-all-btn">전체 완료</button>
    <button id="clear-all-btn">전체 삭제</button>
    `;

  actionBox.querySelector('#complete-all-btn').addEventListener('click', onCompleteAll);
  actionBox.querySelector('#clear-all-btn').addEventListener('click', onClear);

  return actionBox;
}

export default TodoActions;
