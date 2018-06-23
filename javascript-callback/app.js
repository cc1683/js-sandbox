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

// NOTE: write a callback function
/*
    function todo(todo1, todo2, todoFinish) {
        console.log(`First: ${todo1} and second: ${todo2}`);
        todoFinish();
    }

    todo('learn html', 'learn css', () => {
        console.log('All things done!');
    });
*/

// EXAMPLE: make the callback optional and make sure callback is a function
function todo(todo1, todo2, todoFinish) {
    console.log(`First: ${todo1} and second: ${todo2}`);
    if(todoFinish && typeof(todoFinish) === "function") {
        todoFinish();
    }else {
        console.log('Nothing complete yet');
    }
    
}

todo('learn html', 'learn css');

// EXAMPLE: define the callback function outside the function call
function welcome(username, userid, callback) {
    console.log(`Hi, welcome ${username}, your id is ${userid}`);
    callback(username);
}

function message(user) {
    console.log(`Dear ${user}, your ticket is ready`);
}

welcome('John', 001, message);