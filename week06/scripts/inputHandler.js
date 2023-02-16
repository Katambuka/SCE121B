import userInterface from './userInterface.js';
import taskList from './taskList.js';

const formEl = document.querySelector('form');
const inputEl = document.getElementById('task-input');

formEl.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = inputEl.value.trim();
  if (title) {
    const task = taskList.addTask(title);
    userInterface.addTask(task);
    inputEl.value = '';
  }
});
