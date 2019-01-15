//* var, let, const

var name = 'John Doe';
console.log(name);
name = 'Steve Smith';
console.log(name); //! reassign variable's value

//* Init var
var greeting;
console.log(greeting);

//* letters, numbers, _, $
//! Cannot start with NUMBER

//* Multi word variable
var firstName = 'John'; //* Camel case
var first_name = 'Sara'; //* Underscore
var FirstName = 'Tom'; //* Pascal case
var firstname;

//* Const

const age = 10;
console.log(age); 
// age = 12; //! Cannot reassign const variable

// const num; //! Need to assign a value

const person = {
  name: 'John',
  age: 22,
  job: 'Web Developer'
};

console.log(person.name);

person.name = 'Steve';
console.log(person.name); //! the key pair value are allow to change in const object

const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
numbers.push(6);
console.log(numbers); //! the array value are allow to change in const array

// numbers = [1, 2, 3, 4, 5 ,6]; //! this is not allow, since the whole array is reassign!
numbers[0] = 100;
console.log(numbers);

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

