# JavaScript Tutorial for Beginners
## [Link](https://cc1683.github.io/js-sandbox/javascript-tutorial-for-beginners)
### Things covered:
1. var vs let
2. this
3. object
4. array
5. function

## Difference between **var** and **let** ##

**var** is scoped to the nearest function block, **let** is scoped to the nearest enclosing block.
**var** defines a variable globally, or locally to an entire function regardless of block scope. **let** allows to declare variables that are limited in scope to the block, statement, or expression on which it is used.

```javascript
function letTest() {
    let num = 10;
    if(true) {
        let num = 20;
        console.log(num); //output: 20   
    }
    console.log(num); //output: 10
}
```
```javascript
function varTest() {
    var num = 10;
    if(true) {
        var num = 20;
        console.log(num);// output: 20
    }
    console.log(num);// output: 20
}
```
Another example
```javascript
var a = 10;
var b = 10;
if(a === 10) {
    var a = 20;
    let b = 20;

    console.log(a); //output: 20
    console.log(b); //output: 20
}
console.log(a); //output: 20;
console.log(b); //output: 10;
```
In the example above, the scope of the **var** is the entire enclosing function.

## What is **this** in Javascript? ##

Simple Demo
```javascript
// Create object
var nameID = {
    name: 'luis',
    id: function() {
        return this.name;
    }
};
console.log(nameID.id()); //output: luis
```
Arrow function in ES2015 which don't provide their own this binding
Example:
```javascript
id: () => {
    return this.name;
}
console.log(nameID.id()); // output: blank
```
In the **global execution context** (outside of any functions), **this** will refers to the **global object**. **this** == **window object**.

```javascript
console.log(this === window); //output: true
var a = 10;
console.log(window.a); //output: 10
```
To pass the value of **this** from one content to another
```javascript
    var obj = {
        a : 'Custom'
    };
    var a = 'Global'
    function showContent() {
        return this.a;
    }
    showContent(); // output: Global
    showContent.call(obj); // output: Custom
    showContent.apply(obj); // output: Custom
```
The **bind** method (data binding)
```javascript
function f () {
    return this.a;
}

var e = f.bind({
    a: 'Hola'
});
console.log(e()); //output: Hola
```
