var headline = document.getElementById("headline-text");
var list = document.getElementById("item-list").getElementsByTagName("li");

document.getElementById("btn-add").addEventListener('click', insertItem);

function insertItem() {
    let li = document.createElement("li");
    let input = document.getElementById("itemInput");

    if(input.value!= '') {

        li.innerHTML = input.value;
        document.getElementById("item-list").appendChild(li);

        input.value = '';
        checkItem();

    }else {
        alert('Please add the item');
    }
};

function checkItem() {
    for(var i = 0; i < list.length; i++) {
        list[i].addEventListener('click', renameHeadline)
    }
}

function renameHeadline() {
    for(var i = 0; i < list.length; i++) {
        list[i].classList.remove('selected');
    }
    this.classList.add('selected');
    headline.innerHTML = this.innerHTML;
}