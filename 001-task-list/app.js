let task = document.getElementById('task');
let segments = document.getElementById('segments');
segments.style.display = 'none';

document.querySelector('.submit').addEventListener('click', addList);
segments.addEventListener('click', removeList);

function addList() {
    let task = document.getElementById('task');
    if(task.value.length != 0){

        segments.style.display = 'block';
        let e = document.createElement('div');
        e.className = 'ui segment';
        e.appendChild(document.createTextNode(task.value));
        let link = document.createElement('a') ;
        link.className = 'delete';
        link.innerHTML = ` <i class="fas fa-times-circle"></i> `
        e.appendChild(link);

        segments.appendChild(e);
        task.value = '';
    } else {
        alert('Please enter your task!'); 
        return false;
    }
}

function removeList(e) {
    let segment = document.getElementsByClassName('segment');
    if(e.target.parentElement.classList.contains('delete')) {
        e.target.parentElement.parentElement.remove();
        if(segment.length == 0) {
            segments.style.display = 'none';
        }
    }
}

 
