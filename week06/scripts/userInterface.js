import taskList from './taskList.js';

const taskListEl = document.getElementById('task-list');
const taskCountEl = document.getElementById('task-count');

export default {
  // Add a new task to the list and render it to the UI
  addTask: (task) => {
    const taskEl = document.createElement('li');
    taskEl.textContent = task.title;
    if (task.completed) {
      taskEl.classList.add('completed');
    }
    // Toggle the completed status of the task and update the UI on click
    taskEl.addEventListener('click', () => {
      taskList.toggleCompleted(task);
      userInterface.renderTasks(taskList.getTasks());
    });
    taskListEl.appendChild(taskEl);
    userInterface.renderTaskCount(taskList.getTaskCount());
  },
  // Remove a task from the list and update the UI
  removeTask: (task) => {
    const taskEl = taskListEl.querySelector(`li[data-id="${task.id}"]`);
    taskListEl.removeChild(taskEl);
    userInterface.renderTaskCount(taskList.getTaskCount());
  },
  // Render all tasks to the UI
  renderTasks: (tasks) => {
    taskListEl.innerHTML = '';
    tasks.forEach(task => userInterface.addTask(task));
  },
  // Update the total number of tasks in the UI
  renderTaskCount: (taskCount) => {
    taskCountEl.textContent = taskCount;
  }
}
