// let VS var
function varTest() {
    var x = 10;
    if(true) {
        var x = 20; 
        console.log(x); // output: 20
    }
    console.log(x); // output: 20
}

function letTest() {
    let x = 10;
    if(!false) {
        let x = 20;
        console.log(x); // output: 20
    }
    console.log(x); // output: 10
}
varTest();
letTest();

// Another example
var a = 50;
var b = 100;
if(a === 50) {
    var a = 500;
    let b = 1000;

    console.log(a); //output: 10
    console.log(b); //output: 20
}
console.log(a); //output: 10;
console.log(b); //output: 2;

var x = 'Hello';
let y = 'World';

console.log(this.x);// output: Hello
console.log(this.y);// output: undefined

/* ===================================================================== */

// 'this' in javascript
var nameComp = {
    name: 'luis',
    func: function() {
        return this.name;
    }
};
console.log(nameComp.func()); // output: luis

var nameComp = {
    name: 'luis',
    func: () => {
        return this.name;
    }
};
console.log(nameComp.func());// output: blank 

console.log(this === window);
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

/* ================================================================== */
// Object
// let name = 'luis';
// let age = 24;
let person = {
    name: 'luis',
    age: 24
};
console.log(person); // access the person object

// access the properties inside the object

// 1. Dot notation
person.name = 'yong chun';
console.log(person.name);

// 2. Bracket notation
person['name'] = 'yong chun';
console.log(person.name);

// Array
let nameList = ['luis', 'yongchun'];
console.log(nameList);

// Function 
function greet(name) {
    console.log('Hello', name);
}

greet('luis');

function sumNumber(a, b) {
    console.log(a+b);
}

sumNumber(5, 5);
