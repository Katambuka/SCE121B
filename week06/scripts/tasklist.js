

// taskList.js
const TaskList = (function() {
    let tasks = [];
  
    // Load tasks from an API endpoint
    async function loadTasks(url) {
      const response = await fetch(url);
      const data = await response.json();
      tasks = data;
      UserInterface.displayTasks(tasks);
    }
  
    function addTask(description) {
      const task = { description, completed: false };
      tasks.push(task);
      UserInterface.displayTasks(tasks);
    }
  
    function deleteTask(index) {
      tasks.splice(index, 1);
      UserInterface.displayTasks(tasks);
    }
  
    function toggleTask(index) {
      tasks[index].completed = !tasks[index].completed;
      UserInterface.displayTasks(tasks);
    }
  
    function getTasks() {
      return tasks;
    }
  
    return { loadTasks, addTask, deleteTask, toggleTask, getTasks };
  })();
  