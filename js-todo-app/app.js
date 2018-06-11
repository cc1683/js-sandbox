var btnAdd = document.getElementById("btn-add");
var todo = document.getElementById("todo");
var prio = document.getElementById("priority");


btnAdd.addEventListener('click', addToStorage);

function addToStorage(e) {
    if(todo.value.length!=0 && prio.value>0) {

        var todoList = {
            todo: todo.value,
            priority: prio.value
        };

        if(localStorage.getItem("todoHolder") === null) {
            var todoArray = [];
            todoArray.push(todoList);
            localStorage.setItem("todoHolder", JSON.stringify(todoArray));
        }else {
            var todoArray = JSON.parse(localStorage.getItem("todoHolder"));
            todoArray.push(todoList);
            localStorage.setItem("todoHolder", JSON.stringify(todoArray));

        }
        
        e.preventDefault();
    }else {
        console.log('data not valid');
        e.preventDefault();
    }
}

function showResult () {
    var todoArray = JSON.parse(localStorage.getItem("todoHolder"));
    var todoResults = document.getElementById("todoResults");
    var prioResults = document.getElementById("prioResults");


    var todoArrayResults = todoArray.forEach(todo => {
        var todoName = todo.todo;
        var todoPrio = todo.priority;

        todoResults.innerHTML+= '<div class="result-list">'+
                                '<h3>'+todoName+'<p class="priority-list">'+todoPrio+'</p>'+'</h3>'+
                                '</div>';


    })

    // console.log(todoName);
}

