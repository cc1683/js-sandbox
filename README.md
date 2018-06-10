# Unsort Questions #

## Todo ##
:sunny: :sunny: :sunny:

- [x] javascript events
- [x] use javascript event to trigger element's style
- [ ] set duration/time 
- [x] javascript random
- [x] random food small app

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
var a = 1;
var b = 2;
if(a === 1) {
    var a = 10;
    let b = 20;

    console.log(a); //output: 10
    console.log(b); //output: 20
}
console.log(a); //output: 10;
console.log(b); //output: 2;
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
To pass the value of this from one content to another
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
## Lookup table ##

Consider lookup tables instead of switch or if-else

**if-else** statement
```javascript
var name = 'Luis';
if(name == 'Luis') {
    console.log('You have permission to access');
} else if (name == 'Albert') {
    console.log('Session expired');
} else if (name == 'Bob') {
    console.log('Session expired');
} else {
    console.log('Please register');
}
```
**switch** statement
```javascript
var name = 'luis';
switch(name) {
    case 'Luis':
        console.log('You have permission to access');
        break;
    case 'Albert':
        console.log('Session expired');
        break;
    case 'Bob':
        console.log('Session expired');
        break;
    default:
        console.log('Please register');
}
```
**Lookup table** structure
```javascript
var session = {
    'Luis': 'You have permission to access',
    'Albert': 'Session expired',
    'Bob': 'Session expired',
    '': 'Please register'
};
console.log(session[Luis]);
```

## Web Events ##

[Reference](https://developer.mozilla.org/en-US/docs/Web/Events)

## Random ##

get a random item from an array
```javascript
var nameList = ['roy', 'bob', 'john', 'adam'];
var random = nameList[Math.floor(Math.random() * nameList.length)];
console.log(random);
```

## Class List ##

use javascript event to trigger class list of an element
```html
<div>
    <p class="first-class">lorem lipsum</p>
    <button id="btn-toggle">toggle class list</button>
</div>
```
```css
.first-class {
    color: red;
}
.new-first-class {
    color: blue;
}
```
```javascript
const btn = document.getElementById("btn-toggle");
const elem = document.querySelector('.first-class');

// toggle 
btn.addEventListener('click' () => {
    elem.classList.toggle("new-first-class");
    // add 'new-first-class' if it doesn't exist, remove it when it exist
})

// add
btn.addEventListener('click' () => {
    elem.classList.add("new-first-class");
})

// remove
btn.addEventListener('click' () => {
    elem.classList.remove("first-class");
})

// replace
btn.addEventListener('click' () => {
    elem.classList.replace("first-class", "new-first-class");
})
```