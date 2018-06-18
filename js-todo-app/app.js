var btnAdd = document.getElementById("btn-add");
var getTodo = document.getElementById("todo");
var getPrio = document.getElementById("priority");

btnAdd.addEventListener('click', addToStorage);

function addToStorage(e) {
    if(getTodo.value.length != 0 && getPrio.value) {

        var getTodoList = {
            todo: getTodo.value,
            priority: getPrio.value
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
        showStorage();
        toastr.success('Todo add successfully!');
        getTodo.value = '';
        e.preventDefault();

    }else {
        toastr.error('Data is no valid, please try again');
        e.preventDefault();
    }
}

function showStorage () {
    var todoArray = JSON.parse(localStorage.getItem("todoLocalStorage"));
    var todoList = document.getElementById("todoList");

    todoList.innerHTML = '';

    var todoArrayList = todoArray.forEach(todo => {
        var todoItem = todo.todo;
        var todoPrio = todo.priority;

        todoList.innerHTML+= '<div>'+
                             '<h5>'+ todoItem +'<button class="btn btn-sm btn-raised btn-danger mx-3" onclick="deleteTodo(\''+todoItem+'\')">' + 'Delete' + '</button>'+'Priority: '+ todoPrio +'</h5>'+ 
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
    showStorage();
}

