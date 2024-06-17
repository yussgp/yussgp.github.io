document.addEventListener('DOMContentLoaded', loadTasks);

const taskForm = document.getElementById('taskForm');
const searchBar = document.getElementById('searchBar');
taskForm.addEventListener('submit', addTask);
searchBar.addEventListener('input', searchTasks);

let filterStatus = 'all';

function addTask(event) {
    event.preventDefault();

    const taskName = document.getElementById('taskName').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const responsible = document.getElementById('responsible').value;

    if (new Date(endDate) < new Date(startDate)) {
        alert("La fecha de fin no puede ser menor que la fecha de inicio");
        return;
    }

    const task = {
        id: Date.now(),
        name: taskName,
        startDate: startDate,
        endDate: endDate,
        responsible: responsible,
        completed: false
    };

    saveTask(task);
    renderTasks();
    taskForm.reset();
}

function saveTask(task) {
    let tasks = localStorage.getItem('tasks');
    tasks = tasks ? JSON.parse(tasks) : [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    renderTasks();
}

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    let tasks = localStorage.getItem('tasks');
    tasks = tasks ? JSON.parse(tasks) : [];

    tasks = filterAndSearchTasks(tasks);

    tasks.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.classList.add('card', 'mb-3', task.completed ? 'completed' : new Date(task.endDate) < new Date() ? 'expired' : 'pending');
        taskElement.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${task.name}</h5>
                <p class="card-text">Inicio: ${task.startDate}, Fin: ${task.endDate}, Responsable: ${task.responsible}</p>
                <button class="btn btn-success" onclick="resolveTask(${task.id})" ${task.completed ? 'style="display: none;"' : ''}>Resolver</button>
                <button class="btn btn-warning" onclick="unresolveTask(${task.id})" ${task.completed ? '' : 'style="display: none;"'}>Desmarcar</button>
                <button class="btn btn-danger" onclick="deleteTask(${task.id})">Eliminar</button>
            </div>
        `;
        taskList.appendChild(taskElement);
    });
}

function resolveTask(taskId) {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks = tasks.map(task => {
        if (task.id === taskId && new Date(task.endDate) >= new Date()) {
            task.completed = true;
        } else if (task.id === taskId) {
            alert("No se puede marcar como resuelta una tarea cuya fecha de fin ya ha pasado.");
        }
        return task;
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}

function unresolveTask(taskId) {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks = tasks.map(task => {
        if (task.id === taskId) {
            task.completed = false;
        }
        return task;
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}

function deleteTask(taskId) {
    if (!confirm("¿Estás seguro de que deseas eliminar esta tarea?")) {
        return;
    }

    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks = tasks.filter(task => task.id !== taskId);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}

function searchTasks() {
    renderTasks();
}

function filterTasks(status) {
    filterStatus = status;
    renderTasks();
}

function filterAndSearchTasks(tasks) {
    const searchQuery = searchBar.value.toLowerCase();
    return tasks.filter(task => {
        const matchesSearch = task.name.toLowerCase().includes(searchQuery);
        let matchesFilter = true;
        if (filterStatus === 'pending') {
            matchesFilter = !task.completed && new Date(task.endDate) >= new Date();
        } else if (filterStatus === 'completed') {
            matchesFilter = task.completed;
        } else if (filterStatus === 'expired') {
            matchesFilter = !task.completed && new Date(task.endDate) < new Date();
        }
        return matchesSearch && matchesFilter;
    });
}
