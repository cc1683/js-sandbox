// create an array
var colors = ['red', 'green', 'blue'];
console.log('Array list: '+colors);
console.log('Array length: '+colors.length);
console.log('Access the first item in the array: '+colors[0]);
console.log('Access the last item in the array: '+colors[colors.length-1]);

// loop over array
// NOTE: put item as the first parameter
console.log('Loop over array: ')
colors.forEach((color, index) => {
    console.log(index + ' : '+ color);
})

/* ========================================================================= */

// display array on DOM
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
console.log('original name list: '+nameList)
// remove bob and carl
var pos = nameList.indexOf('bob'); // 1

// NOTE: pos = start index, 2 = defines the number of items to be removed
var removedNameList = nameList.splice(pos, 2);
console.log('name list after removed bob and carl: '+nameList);
console.log('bob and carl form a new array: '+removedNameList);

/* ============================================================================ */

// array inside an object
var jsObj = {
    author: 'luis',
    colors: ['red', 'blue', 'purple', 'black', 'white']
};
console.log('Array inside an object: ')
console.log(jsObj);
console.log(jsObj.colors);
console.log('Access the array item inside an object: ')
console.log(jsObj.colors[1]); // blue

// find if an item is in the array
console.log('Use \'includes\' to find an item is in the array: ');
var job = ['programmer', 'developer', 'designer', 'security'];

if (job.includes('developer')) {
    console.log('developer is in the job list');
}else {
    console.log('Can\'t find a developer here');
}

/* ============================================================================== */

/*
    higher order array methods

    --foreach()
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

const randomNums = [1,2,4,5,6,5,4,7,7,4353,234,124,5,35,6,57,7,5];

// basic looping
// EXAMPLE: normal for loop
console.log('normal "for" loop: ');
for(let counter = 0; counter<inventors.length; counter++) {
    console.log(inventors[counter]);
}

//EXAMPLE: forEach loop
console.log('"forEach" loop to get the last name of inventors: ');
inventors.forEach(inventor => {
    console.log(inventor.last);
})

/* ========================================================== */

//NOTE: sorting
//EXAMPLE: sort -> sort the list from year
console.log('sort of year: ')

// const sortYear =  inventors.sort((a, b) => {
//     if (a.year > b.year) {
//         return 1;
//     } else {
//         return -1;
//     }
// });
// console.log('Sort from year: ')
// console.table(sortYear);

//EXAMPLE: shorthand code
const sortYear = inventors.sort((a, b) => (a.year>b.year ? 1: -1));
console.table(sortYear);

console.log('sort of alphabet: ')

//EXAMPLE: sort -> sort the list alphabetically from first name
const fName = inventors.sort((a, b) => {
    return a.first > b.first ? 1: -1;
});
console.table(fName);

//EXAMPLE: sort the random numbers
const sortNum = randomNums.sort((a, b) => (a-b));
console.log(sortNum);

/* ========================================================= */

//NOTE: filter

//EXAMPLE: filter out which year greater than 1700
// let yearList = []
// for(let i=0; i<inventors.length; i++) {
//     if(inventors[i].year>1700) {
//         yearList.push(inventors[i]);
//     }
// }
// console.log('Filter year greater than 1700: ')
// console.table(yearList);

//EXAMPLE: use filter method to get the same result
// const userFilterYear = inventors.filter(inventor => {
//     if(inventor.year>1700) {
//         return true;
//     }
// });
// console.log('Use filter method to filter out year greater than 1700:')
// console.table(userFilterYear);

//EXAMPLE: shorthand code
const lastFilter = inventors.filter(inventor => inventor.year>1700);
console.log('Shorthand: ')
console.table(lastFilter);

//EXAMPLE: filter & sort -> return only when year between 1500 - 1700
const filterYear = inventors.filter(inventor => {
    if (inventor.year >= 1500 && inventor.year < 1700) {
        return true;
    }
});

const furtherSort = filterYear.sort((a, b) => {
    return a.year > b.year ? 1: -1;
})
console.table(furtherSort);

/* ========================================================== */

// NOTE: map - form a new array from current array

//EXAMPLE: creat array of inventors first name
const inventorFname = inventors.map(inventor => inventor.first);
console.log('new array of inventors first name: ')
console.log(inventorFname);

// EXAMPLE: return only the name from the array
const onlyName = inventors.map(inventor => {
    return inventor.first+', '+inventor.last;
});
console.table(onlyName);

//EXAMPLE: return full name of inventor
const inventorName = inventors.map(inventor => `${inventor.last}, ${inventor.first}`)
console.log(inventorName);

//EXAMPLE: another example of map
const nums = [1,2,4,5,32,53,52,23,6,57,7,65,856,346];

// get the square root of num array, then times two
const numSquare = nums
    .map(num => Math.sqrt(num))
    .map(num => num *2);

console.log(numSquare);

/* =========================================================================================== */

//NOTE: reduce

//EXAMPLE:  looping to sum up the total random numbers
// let numSum = 0;
// for(let u =0; u<randomNums.length; u++) {
//     numSum += randomNums[u];
// }
// console.log(numSum);

//EXAMPLE:  use reduce method
const numSum = randomNums.reduce((sum, num) => (sum+num), 0); //NOTE: reduce take one more parameter, which use to store the total number, in this case 'sum'
console.log(numSum);

//EXAMPLE:  reduce -> sum up the total year
const totalYear = inventors.reduce((total,inventor) => {
    return total + inventor.year;
}, 0);

console.log(totalYear);

// EXAMPLE: reduce -- sum up the skill people
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

//EXAMPLE: sum up the gender distribution
const nameGender = [
    {name: 'luis', gender: 'male'},
    {name: 'ahboy', gender: 'male'},
    {name: 'ahgirl', gender: 'female'},
    {name: 'harry', gender: 'male'},
    {name: 'yy', gender: 'female'},
    {name: 'rose', gender: 'female' },
];

// const genDis = nameGender.reduce((total, gen) => {
//     total[gen.gender]++;
//     return total;
// }, {
//     male: 0,
//     female: 0
// });

const genDis = nameGender.reduce((total, gen) => (total[gen.gender] ++), {
    male: 0,
    female: 0
});

console.table(genDis);

//EXAMPLE: wrapping things up
const luckyNum = [1,2,3,5,6,7,3,6,546,345,3,234,43,7];

const lucky = luckyNum
    .map(luc => luc * 4)
    .filter(luc => luc>10)
    .sort((a, b) => a-b)
    .reduce((a, b) => (a+b), 0);

console.log('Lucky number: '+lucky);