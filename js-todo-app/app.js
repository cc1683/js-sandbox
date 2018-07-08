var btnAdd = document.getElementById("btn-add");
var getTodo = document.getElementById("todo");
var getPrio = document.getElementById("priority");

var completed = 0;

var todoCompleted = 'On Going';

btnAdd.addEventListener('click', addToStorage);

function addToStorage(e) {
    if(getTodo.value.length != 0 && getPrio.value) {

        var getTodoList = {
            todo: getTodo.value,
            priority: getPrio.value,
            status: completed,
            todoCompleted: todoCompleted
        };

        if(localStorage.getItem("todoLocalStorage") === null) {
            var todoArray = [];
            todoArray.push(getTodoList);
            localStorage.setItem("todoLocalStorage", JSON.stringify(todoArray));
        }else {
            var todoArray = JSON.parse(localStorage.getItem("todoLocalStorage"));
            todoArray.push(getTodoList);
            localStorage.setItem("todoLocalStorage", JSON.stringify(todoArray));
        }
        e.preventDefault();
        showLocalStorage();
        toastr.success('Todo added successfully!');
        getTodo.value = '';
        

    }else {
        e.preventDefault();
        toastr.error('Data is no valid, please try again');
    }
}

function showLocalStorage () {
    var todoArray = JSON.parse(localStorage.getItem("todoLocalStorage"));
    var todoList = document.getElementById("todoList");

    todoList.innerHTML = '';

    todoArray.forEach(todo => {
        var todoItem = todo.todo;
        var todoPrio = todo.priority;
        var todoComple = todo.todoCompleted;

        todoList.innerHTML+= '<div class="grid-item card m-1">'+
                             '<div class="card-body text-dark">'+
                             '<h5>'+ todoItem +'</h5>'+'<p>'+'Priority: '+ todoPrio +'</p>'+ '<button class="btn btn-sm btn-raised btn-warning" id="deleteBtn" onclick="deleteTodo(\''+todoItem+'\')">' + 'Delete' + '</button>'+ '<input type="checkbox" id="todoCheckbox" onclick="updateTodo(\''+todoItem+'\')">'+ 'Status '+
                             '</div>'+
                             '<div>'+ '<p class="text-center">'+ todoComple + '</p>'+
                             '</div>'+
                             '</div>';
    })
}

function deleteTodo(todo) {
    var todoArray = JSON.parse(localStorage.getItem("todoLocalStorage"));
    for(var i =0; i<todoArray.length; i++) {
        if(todoArray[i].todo === todo) {
            todoArray.splice(i, 1);
        }
    }
    toastr.warning('Todo deleted!');
    localStorage.setItem("todoLocalStorage", JSON.stringify(todoArray));
    showLocalStorage();
}

function updateTodo(todo) {
    var todoArray = JSON.parse(localStorage.getItem("todoLocalStorage"));
    for(var i =0; i<todoArray.length; i++) {
        if(todoArray[i].todo === todo) {
            if(todoArray[i].status !=1 ) {
                todoArray[i].status = 1;
                todoArray[i].todoCompleted = 'Finished';
                
            }else {
                todoArray[i].status = 0;
                todoArray[i].todoCompleted = 'On Going';
            }
        }
    }  
    toastr.success('Todo status updated!');
    localStorage.setItem("todoLocalStorage", JSON.stringify(todoArray));
    showLocalStorage();
} 
