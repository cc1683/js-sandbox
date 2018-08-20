let task = document.getElementById('task');
let segments = document.getElementById('segments');
segments.style.display = 'none';

document.querySelector('.submit').addEventListener('click', addList);

function addList() {
    let task = document.getElementById('task');
    if(task.value.length != 0){

        segments.style.display = 'block';
        let e = document.createElement('div');
        e.className = 'ui segment';
        e.innerHTML = `
                        <p>${task.value} <i class="fas fa-times-circle" id="remove"></i></p> 
                       `
        segments.appendChild(e);
        task.value = '';
    } else {
        alert('Please enter your task!');
        return false;
    }
}
