const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

function addTask() {
  const taskText = todoInput.value.trim();

  if (taskText === '') {
    alert('กรุณากรอกรายการงาน!');
    return;
  }

  const li = document.createElement('li');

  const span = document.createElement('span');
  span.textContent = taskText;

  const delBtn = document.createElement('button');
  delBtn.className = 'del-btn';
  delBtn.textContent = 'del';

  li.appendChild(span);
  li.appendChild(delBtn);

  todoList.appendChild(li);

  todoInput.value = '';
}

addBtn.addEventListener('click', addTask);

todoInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addTask();
  }
});

todoList.addEventListener('click', function (e) {
  if (e.target.classList.contains('del-btn')) {
    const li = e.target.parentElement;
    todoList.removeChild(li);
  }
});