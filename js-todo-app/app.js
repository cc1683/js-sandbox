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
        e.preventDefault();

    }else {
        alert('Your data is no valid, Please try it again.')
        e.preventDefault();
    }
}

function showStorage () {
    var todoArray = JSON.parse(localStorage.getItem("todoLocalStorage"));
    var todoList = document.getElementById("todoList");
    var prioList = document.getElementById("prioList");

    todoList.innerHTML = '';
    prioList.innerHTML = '';


    var todoArrayList = todoArray.forEach(todo => {
        var todoItem = todo.todo;
        var todoPrio = todo.priority;

        todoList.innerHTML+= '<div>'+
                             '<h3>'+todoItem+'</h3>'+
                             '</div>';

        prioList.innerHTML+='<div>'+
                            '<h3>'+todoPrio+'</h3>'
                            '</div>'
    })
}

