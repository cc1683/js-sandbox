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
    console.log(`var value inside a function scope: ${var1}`)
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


//* Array
const demoUI= document.getElementById('demo-results');
const hideBtn = document.createElement('button');

hideBtn.className = 'ui small red button right floated hide';
hideBtn.textContent = 'Hide';
demoUI.appendChild(hideBtn);

document.getElementById('demo-dynamic-array').addEventListener('click', dynamicArrayDemo);
document.querySelector('.hide').addEventListener('click', () => {
    demoUI.style.display = 'none';
})

function dynamicArrayDemo() {
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

        const demoTitle = document.createElement('p');
        demoTitle.className = 'ui small header';
        demoTitle.textContent = 'Team Member List';
        demoUI.style.display = 'block';
        demoUI.appendChild(demoTitle);

        const dynamicArrayList = document.createElement('ul');

        for(let u=0; u<memberList.length; u++) {
            const dynamicArrayResults = document.createElement('li');
            dynamicArrayResults.innerHTML = `<i class="fas fa-user"></i> `;
            dynamicArrayResults.appendChild(document.createTextNode(memberList[u]));
            dynamicArrayList.appendChild(dynamicArrayResults);
        }

        demoUI.appendChild(dynamicArrayList);
    }
}


