# JavaScript Fundamentals :computer:

## Links
-[JavaScript Primitive vs. References value](http://www.javascripttutorial.net/javascript-primitive-vs-reference-values/)

-[Metaprogramming in ES6: Symbols and why they're awesome](https://www.keithcirkel.co.uk/metaprogramming-in-es6-symbols/)

## Variable Declarations
In JavaScript, we can use **const**, **let**, and **var** to declare a variable. However, there are few differences between them.

- cannot initialize **const** with empty value.
```javascript
const var; //! Uncaught SyntaxError: Missing initializer in const declaration
```

- Scoping

**var** is scoped to the nearest function block, **let** is scoped to the nearest enclosing block. **var** defines a variable globally, or locally to an entire function regardless of block scope. **let** allows to declare variables that are limited in scope to the block, statement, or expression on which it is used.
```javascript
function showLet() {
    let var1 = 10;
    console.log(`Initial value: ${var1}`);
    if(true){
        let var1 = 20;
        console.log(`let value inside a block scope: ${var1}`);
    }
    console.log(`let value inside a function scope: ${var1}`);
}

function showVar() {
    var var1 = 10;
    console.log(`Initial value: ${var1}`);
    if(!false) {
        var var1 = 20;
        console.log(`var value inside a block scope: ${var1}`);
    }
    console.log(`var value inside a function scope: ${var1}`)
}
```
```
Output: 
Initial value: 10
let value inside a block scope: 20
let value inside a function scope: 10

Initial value: 10
var value inside a block scope: 20
var value inside a function scope: 20
```
- Reassign value

**const** means constant, we cannot reassign a new value to it. However, we still able to add more item into a **const** array or object.
```javascript
const num1 = 10;

function changeConst() {
    num1 = 20;
    return num1;
}
```
```
Output:
Uncaught TypeError: Assignment to constant variable.
```

```javascript
const names = ['albert', 'bob', 'alice'];

function addToConstArray(names) {
    names.push('alex');
    return names;
}

const user1 = {
    id: 1,
    username: 'testuser1',
    major: 'hardware'
}

function addToConstObject(user) {
    user.phone = '012345678';
    return user;
}
```
```
Output: 
(4) ["albert", "bob", "alice", "alex"]
{id: 1, username: "testuser1", major: "hardware", phone: "012345678"}
```

## Array
