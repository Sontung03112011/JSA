const taskList = document.getElementById('taskList');
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');

let tasks = [];

// Function to render tasks
function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.classList.add(task.completed ? 'completed' : '');
        li.innerHTML = `
            <span>${task.title}</span>
            <div>
                <button class="edit" onclick="editTask(${index})">Edit</button>
                <button class="delete" onclick="deleteTask(${index})">Delete</button>
            </div>
        `;
        taskList.appendChild(li);
    });
}

// Function to add task
addTaskButton.addEventListener('click', () => {
    const taskTitle = taskInput.value.trim();
    if (taskTitle) {
        const task = {
            id: tasks.length + 1,
            title: taskTitle,
            completed: false
        };
        tasks.push(task);
        taskInput.value = '';
        renderTasks();
    }
});

// Function to edit task
function editTask(index) {
    const newTitle = prompt('Edit task title:', tasks[index].title);
    if (newTitle) {
        tasks[index].title = newTitle;
        renderTasks();
    }
}

// Function to delete task
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

// Render initial tasks
renderTasks();
