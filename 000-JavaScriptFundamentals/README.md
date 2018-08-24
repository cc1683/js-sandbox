# JavaScript Fundamentals :computer:

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