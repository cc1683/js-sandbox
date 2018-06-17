/* declarations in Javascript */

// EXAMPLE: constant variable
/*
const constantData = 10;

function changeConstData() {
    constantData = 20;
    console.log(constantData);
}
changeConstData(); // NOTE: will get a error message in console [Assignment to a constant variable]
*/

// EXAMPLE: however, const in Object and Array are not protected
const colorList = ['red', 'blue', 'yellow'];
colorList.push('black');
console.log(colorList);

const carList = {
    'Honda': 1,
    'Toyota': 2,
    'Nissan': 3
}
carList.Nissan = 10;
console.log(carList);

// EXAMPLE: difference between var and let
function varTest() {
    var x = 10;
    if(true) {
        var x = 20; 
        console.log('var value inside block: '+x);
    }
    console.log('var value outside block: '+x);
}

function letTest() {
    let x = 10;
    if(!false) {
        let x = 20;
        console.log('let value inside block: '+x);
    }
    console.log('let value outside block: '+x);
}
varTest();
letTest();

// Another example
var a = 10;
var b = 10;
if(a === 10) {
    var a = 20;
    let b = 20;

    console.log(a);
    console.log(b);
}
console.log(a);
console.log(b);

var x = 'Hello';
let y = 'World';
console.log('set var x = Hello, and set let y = World');
console.log('value of this.x: '+this.x);// output: Hello
console.log('value of this.y: '+this.y);// output: undefined

// EXAMPLE: global and local variable in Javascript

var myName = 'luis'; // NOTE: any variable declared outside a function block belongs to global scope
function callName() {
    var myName = 'another name';
    console.log('local variable: '+myName);
}
callName();
console.log('global variable: '+myName);

// EXAMPLE: variable hoisting
console.log('value of hoistingValue: '+hoistingValue); // NOTE: return undefined
var hoistingValue = 20;


/* ============================================================================================= */

/* data structure and type */

/*
    boolean
    null
    undefined
    number
    string
    symbol
    object
*/

// 'this' in javascript
var nameComp = {
    name: 'luis',
    func: function() {
        return this.name;
    }
};
console.log(nameComp.func()); // output: luis

console.log(this === window); // true
var a = 10;
console.log(window.a);

// Pass value of 'this'
var obj = {
    a: 'Custom'
};
var a = 'Global';

function callContent() {
    return this.a;
}

console.log(callContent()); // output: Global
console.log(callContent.call(obj)); //output: Custom

// Another example
function add(c, d) {
    return this.a + c + d;
}

var numList = {
    a: 12
};

console.log(add.call(numList, 12, 12)); //output: 36

// 'bind' method
function f () {
    return this.a;
}

var e = f.bind({
    a: 'Hola'
});
console.log(e());// output: Hola

/* ============================================================================================= */

// Object
let person = {
    name: 'luis',
    age: 24
};
console.log('person object: ');
console.log(person); // access the person object

// access the properties inside the object
console.log('difference ways to access the properties inside an object: ')

// 1. Dot notation
person.name = 'yong chun';
console.log('Dot notation: '+person.name);

// 2. Bracket notation
person['name'] = 'yong chun';
console.log('Bracket notation: '+person.name);

// Array
let nameList = ['luis', 'yongchun'];
console.log('Array: '+nameList);

// Function 
function greet(name) {
    console.log('Hello', name);
}

greet('luis');

function sumNumber(a, b) {
    console.log(a+b);
}

sumNumber(5, 5);
