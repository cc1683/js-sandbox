# JavaScript Tutorial for Beginners
# [Link](https://cc1683.github.io/js-sandbox/javascript-tutorial-for-beginners)

## Declarations in JavaScript

**var** declares a variable

**let** declares a block-scoped, local variable

**const** declares a block-scoped, **read only** named constant

## Difference between **var** and **let** 

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

## What is **this** in Javascript? 

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
## Exception Handling

keywords: **try**, **catch**, **finally**, **throw**

1. try{}   - test a block of code for errors
2. catch{} - handle the error
3. throw{} - create custom error
4. finally{} - execute code after try and catch regardless of the result

error object takes 2 properties, **name** and **message**

```javascript
try {
    console.log('start of try runs');
    errorHere();
    console.log('end of try runs, -- never reached');
} catch(err) {
    console.log('error has occured: '+err);
} finally{
    console.log('this is always run, regardless of the try, catch result')
}
console.log('...execution continue here');
console.log('\n');
```
Another example
```javascript
let json = '{"age": 20}';

try {
    let user = JSON.parse(json);
    if(!user.age) {
        throw new SyntaxError("imcomplete data: no name");
    }
    console.log('no error occured');
} catch(e) {
    console.log('Error: '+e);// NOTE: e.name = Syntax Error, e.message = 'imcomplete data: no name'
}
console.log('\n');
```


