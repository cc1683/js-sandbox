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