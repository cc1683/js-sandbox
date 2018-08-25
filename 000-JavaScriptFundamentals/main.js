//* Variable Declaration
let var1;
var var2;
//const var3; //! Uncaught SyntaxError: Missing initializer in const declaration

function showLet() {
    let var1 = 10;
    console.log(`Initial value: ${var1}`);
    if(true){
        let var1 = 20;
        console.log(`let value inside a block scope: ${var1}`);
    }
    console.log(`let value inside a function scope: ${var1}`);
}

showLet();

function showVar() {
    var var1 = 10;
    console.log(`Initial value: ${var1}`);
    if(!false) {
        var var1 = 20;
        console.log(`var value inside a block scope: ${var1}`);
    }
    console.log(`var value inside a function scope: ${var1}`);
}

showVar();

const num1 = 10;

function changeConst() {
    num1 = 20;
    return num1;
}

// changeConst(); //! Uncaught TypeError: Assignment to constant variable.

const names = ['albert', 'bob', 'alice'];

function addToConstArray(names) {
    names.push('alex');
    return names;
}

console.log(addToConstArray(names));

const user1 = {
    id: 1,
    username: 'testuser1',
    major: 'hardware'
}

function addToConstObject(user) {
    user.phone = '012345678';
    return user;
}

console.log(addToConstObject(user1));


//? ============================================================================================================= ?//


//* Array Demo
const demoUI= document.getElementById('demo-content-wrapper');

document.getElementById('demo-1').addEventListener('click', arrayDemoOne);
document.getElementById('demo-2').addEventListener('click', arrayDemoTwo);
document.getElementById('demo-3').addEventListener('click', arrayDemoThree);

//! Array Demo 1
function arrayDemoOne() {
    let memberList = [];
    let count = prompt('How many team member(s) you have?');
    count = Number(count);

    if(isNaN(count) || count <=0) {
        alert('Input No Valid!');
        return false;
    } else {
        for(let i=0; i<count; i++) {
            let membersName = prompt(`#${i+1} Members\' Name:`);

            if(membersName.length != 0) {
                memberList.push(membersName);
                membersName = '';
            } else {
                alert('Input No Valid!');
                return false;
            }
        }

        createDemoContainer('Team Member List');
        createDemoList(memberList);
        createReloadBtn('demo-1');
    }
}

//! Array Demo 2
function arrayDemoTwo() {
    createReloadBtn('demo-2');
    createDemoContainer('Item list');

    const itemInputWrapper = document.createElement('div');
    itemInputWrapper.className = 'ui input';

    const itemInput = document.createElement('input');
    itemInput.setAttribute('type', 'text');
    itemInput.setAttribute('placeholder', 'Item name');

    const addBtn = document.createElement('input');
    addBtn.setAttribute('type', 'submit');
    addBtn.className = 'ui small black button right floated add';
    addBtn.value = 'Add';

    itemInputWrapper.appendChild(itemInput);
    itemInputWrapper.appendChild(addBtn);
    demoUI.appendChild(itemInputWrapper);

    demoUI.addEventListener('mousedown', (e) => {
        if(e.target.classList.contains('add') && itemInput.value != '') {
            const list = document.createElement('div');
            list.className = 'ui list';

            const listItem = document.createElement('div');
            listItem.className = 'item';
            listItem.innerHTML = '<i class="far fa-list-alt"></i> ';

            listItem.appendChild(document.createTextNode(itemInput.value));
            list.appendChild(listItem);

            itemInput.value = '';

            demoUI.appendChild(list);
        } else if(e.target.classList.contains('add') && itemInput.value == '') {
            alert('Please enter something!');
        }
    })
}

//! Array Demo 3
function arrayDemoThree() {
    createReloadBtn('demo-3');
    const founders = ['John', 'Issac', 'Marie', 'Steve', 'Albert'];

    createDemoContainer('Sorting');
    createDemoList(founders);

    const sortBtn = document.createElement('button');
    sortBtn.className = 'ui small green button sort';
    sortBtn.textContent = 'Sort';

    demoUI.addEventListener('mousedown', (e) => {
        if(e.target.classList.contains('sort')) {
            sortName = founders.sort((a, b) => {
                return a > b ? 1 : -1;
            })
            createDemoContainer('After sort....');  
            createDemoList(sortName);
        }
    })
    demoUI.appendChild(sortBtn);
}

//! Demo Title
function createDemoContainer(title) {
    const demoTitle = document.createElement('p');
    demoTitle.className = 'ui small header';
    demoTitle.textContent = title;
    demoUI.style.display = 'block';

    let container = demoUI.appendChild(demoTitle);
    return container;
}

//! Demo list
function createDemoList(items) {
    const arrayList = document.createElement('ul');

    for(let u=0; u<items.length; u++) {
        const arrayItem= document.createElement('li');
        arrayItem.innerHTML = `<i class="fas fa-user"></i> `;
        arrayItem.appendChild(document.createTextNode(items[u]));
        arrayList.appendChild(arrayItem);
    }
    let list = demoUI.appendChild(arrayList);  
    return list;
}

//! Reload Button
function createReloadBtn(elem) {
    document.getElementById(elem).value = 'Clear All';
    document.getElementById(elem).classList += ' windows-reload';
    document.getElementById(elem).classList.replace("grey", "red");
}

//! Windows Reload
document.querySelector('.demo-list').addEventListener('mousedown', (e) => {
    if(e.target.classList.contains('windows-reload')) {
        window.location.reload();
    }
})