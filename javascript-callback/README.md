# Callback Functions in Javascript
Definition from Wikipedia:
> A reference to executable code, or a piece of executable code, that is passed as an argument to other code
---
A callback is a function that is to be executed ***after*** another function has finished executing.

## Why need Callback?
Javascript is an event driven language. Instead of waiting for a response before moving on, Javascript will keep executing while listening for other events

```javascript
// Normal function 
/*
    function first() {
        console.log(1);
    }

    function second() {
        console.log(2);
    }

    first();
    second();
*/

// output:
// 1
// 2

// let modify some code to simulate code delay in first() function
function first() {
    setTimeout(() => {
        console.log(1)
    }, 500);
}
function second() {
    console.log(2);
}

first();
second();

// output:
// 2
// 1
```
It's not that Javascript didn't execute the function in the order, in fact, Javascript  didn't wait for a response from ***first()*** before moving on to execute ***second()***

## Callback are a way to make sure certain code doesn't execute until other code has already finished execution.

```javascript
// write a callback function
function todo(todo1, todo2, todoFinish) {
    console.log(`First: ${todo1} and second: ${todo2}`);
    todoFinish();
}

todo('learn html', 'learn css', () => {
    console.log('All things done!');
});

// output:
// First: learn html and second: learn css
// All things done!
```

## Make the callback optional and makesure callback is a function
```javascript
function todo(todo1, todo2, todoFinish) {
    console.log(`First: ${todo1} and second: ${todo2}`);
    if(todoFinish && typeof(todoFinish) === "function") {
        todoFinish();
    }else {
        console.log('Nothing complete yet');
    }
    
}

todo('learn html', 'learn css');

// output:
// First: learn html and second: learn css
// Nothing complete yet
```

## Define the callback function outside the function call
```javascript
function welcome(username, userid, callback) {
    console.log(`Hi, welcome ${username}, your id is ${userid}`);
    callback(username);
}

function message(user) {
    console.log(`Dear ${user}, your ticket is ready`);
}

welcome('John', 001, message)

// output:
// Hi, welcome John, your id is 1
// Dear John, your ticket is ready
```


