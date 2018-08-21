//! Define UI variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//! Set default ul element display none
taskList.style.display = 'none';

//! Load all event listeners
loadEventListeners();

function loadEventListeners() {

    //* DOM load event
    document.addEventListener('DOMContentLoaded', getTasks);

    //* Add task event
    form.addEventListener('submit', addTask);

    //* Remove task event
    taskList.addEventListener('click', removeTask);

    //* Clear all the tasks
    clearBtn.addEventListener('click', clearTasks);

    //* Filter tasks event
    filter.addEventListener('keyup', filterTasks);
}

//! Add task
function addTask(e) {
    if(taskInput.value === '') {
        alert('Please Add A Task!');
        return false;
    }

    taskList.style.display = 'block';

    //* Create li element
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));

    //* Create remove link
    const link = document.createElement('a'); 
    link.className = 'delete-item secondary-content';
    link.innerHTML = `<i class="material-icons">clear</i>`;

    li.appendChild(link);
    taskList.appendChild(li);

    //* Store in local storage
    storeInLocalStorage(taskInput.value);

    taskInput.value = '';
    toastr.success('New task added!');
    e.preventDefault();
}

//! Store task in local storage
function storeInLocalStorage(task) {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

//! Get tasks from local storage
function getTasks() {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    } 
    
    tasks.forEach(task => {

        taskList.style.display = 'block';

        const li = document.createElement('li');
        li.className = 'collection-item';
        li.appendChild(document.createTextNode(task));

        const link = document.createElement('a'); 
        link.className = 'delete-item secondary-content';
        link.innerHTML = `<i class="material-icons">clear</i>`;

        li.appendChild(link);
        taskList.appendChild(li);
    });
}

//! Remove task
function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item')) {
        e.target.parentElement.parentElement.remove();
        toastr.error('Task removed!');

        //* Remove from local storage
        removeFromLocalStorage(e.target.parentElement.parentElement);

        if(taskList.childElementCount > 0) {
            taskList.style.display = 'block';
        } else {
            taskList.style.display = 'none';
        }
    }
}

//! Remove task from local storage
function removeFromLocalStorage(taskItem) {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }    

    tasks.forEach(function(task, index) {
        if(taskItem.firstChild.textContent === task) {
            tasks.splice(index, 1);
        }
    })

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

//! Clear all the tasks
function clearTasks() {
    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
    toastr.error('All tasks removed!');
    taskList.style.display = 'none';

    //* Clear all the tasks from local storage
    clearAllTasksFromLocalStorage();
}

//! Clear all the tasks from local storage
function clearAllTasksFromLocalStorage() {
    localStorage.clear();
}

//! Filter tasks
function filterTasks(e) {
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(task => {
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1 ) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    })
}