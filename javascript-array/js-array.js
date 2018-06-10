// Create an array
var colors = ['red', 'green', 'blue'];
console.log('Array list: '+colors);
console.log('Array length: '+colors.length);
console.log('Access the first item in the array: '+colors[0]);
console.log('Access the last item in the array: '+colors[colors.length-1]);

// Loop over array

// NOTE: put array item as the first parameter

console.log('Loop over array: ')
colors.forEach((color, index) => {
    console.log(index + ' : '+ color);
})

/* ========================================================================= */

//display array on DOM
var btnShowArray = document.getElementById("btn-show-array");
var btnHideArray = document.getElementById("btn-hide-array");

btnShowArray.addEventListener('click', showArray);
function showArray() {
    document.querySelector('.arrayDemo').innerHTML = colors;
};
btnHideArray.addEventListener('click', () => {
    document.querySelector('.arrayDemo').innerHTML = '';
});

/* ========================================================================== */

// removed items from array index position

var nameList = ['albert', 'bob', 'carl', 'dolly', 'eric'];

// let say want to remove bob and carl
var pos = nameList.indexOf('bob'); // 1

// NOTE: pos = start index, 2 = defines the number of items to be removed
var removedNameList = nameList.splice(pos, 2);
console.log(nameList);
console.log(removedNameList);

/* ============================================================================ */

//array inside an object

var jsObj = {
    author: 'luis',
    colors: ['red', 'blue', 'purple', 'black', 'white']
};
console.log('Array inside an object: ')
console.log(jsObj);
console.log(jsObj.colors);
console.log('Access the array item inside an object: ')
console.log(jsObj.colors[1]); // blue

/* ============================================================================== */

/*
    higher order functions

    -- sort()
    -- filter()
    -- map()
    -- reduce()
    
*/

const inventors = [
    {first: 'Albert', last: 'Einstein', year: 1879 , passed: 1955},
    {first: 'Isaac', last: 'Newton', year: 1643 , passed: 1727},
    {first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642},
    {first: 'Marie', last: 'Curie', year: 1867, passed: 1934},
    {first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630}
];

// sort -> sort the list based on year

const sortYear =  inventors.sort((a, b) => {
    if (a.year > b.year) {
        return 1;
    } else {
        return -1;
    }
});

console.table(sortYear);

// sort -> sort the list alphabetically by first name

const fName = inventors.sort((a, b) => {
    return a.first > b.first ? 1: -1;
});

console.table(fName);

// filter & sort -> return only when year between 1500 - 1700

const filterYear = inventors.filter(inventor => {
    if (inventor.year >= 1500 && inventor.year < 1700) {
        return true;
    }
});

const furtherSort = filterYear.sort((a, b) => {
    return a.year > b.year ? 1: -1;
})

console.table(furtherSort);

// map -> return only the name from the list

const onlyName = inventors.map(inventor => {
    return inventor.first+', '+inventor.last;
});

console.table(onlyName);

// reduce -> sum up the total year

const totalYear = inventors.reduce((total,inventor) => {
    return total + inventor.year;
}, 0);

console.log(totalYear);

//reduce -- sum up the skill people

const skillList = [
    {name: 'Albert', skill: 'PS'},
    {name: 'Ben', skill: 'CSS'},
    {name: 'John', skill: 'CSS'},
    {name: 'Eric', skill: 'CSS'},
    {name: 'Garry', skill: 'PS'},
];

const skillDis = skillList.reduce((total, skills) => {
    total[skills.skill]++;
    return total;
}, {
    PS: 0,
    CSS: 0
});

console.table(skillDis);