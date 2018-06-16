# Unsort Questions #
## [Link](https://cc1683.github.io/js-sandbox/)
## Todo ##
:sunny: :sunny: :sunny:

- [x] javascript events
- [x] use javascript event to trigger element's style
- [ ] set duration/time 
- [x] javascript random
- [x] random food small app


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