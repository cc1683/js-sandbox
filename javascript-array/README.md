# Javascript Array #
## [Link](https://cc1683.github.io/js-sandbox/javascript-array/)
1. create an array
```javascript
var colors = ['red', 'green', 'blue'];
```
2. array inside an object
```javascript
var objStoreArray = {
    id: 'a',
    arrayList = ['red', 'blue', 'green']
};
console.log(objStoreArray.arrayList[2]);
```
3. access an array item
```javascript
console.log(colors); // (3) ["red", "green", "blue"]
console.log(colors[0]); // green
console.log(colors[colors.length-1]); //blue
```
4. loop over an array
```javascript
colors.foreach(color => {
    console.log(color);
})
```
5. add and remove item
```javascript
colors.push('yellow'); // add to the end
colors.pop(); // remove form the end
colors.unshift('white')// add to the front
colors.shift(); // remove from the front
colors.indexOf('red'); // find the index of an item
if(colors.includes('red')) {console.log('true')};
```
6. remove items from an index position
```javascript
var nameList = ['albert', 'bob', 'carl', 'dolly', 'eric'];
// let say want to remove bob and carl
var pos = nameList.indexOf('bob'); // 1
var removedNameList = nameList.splice(pos, 2);// pos = start index, 2 = defines the number of items to be removed
console.log(nameList); // albert, dolly, eric
console.log(removedNameList); // bob, carl
```

## Higher order array methods ##
```javascript
var companies = [
    {name: 'company A', founder: 'John', year: 1700 },
    {name: 'company B', founder: 'Steve', year: 1500 },
    {name: 'company C', founder: 'Kenzo', year: 1709 },
    {name: 'company D', founder: 'Albert', year: 2000 },
]
```
1. filter
```javascript
// compnay found later than 1650
const compFilter = companies.filter(company => (company.year>=1650));
```

2. sort
```javascript
// sort the company list by year
const compSort = companies.sort((a, b) => a.year>b.year ? 1 : -1);
```

3. map
```javascript
// form a new array contains company's founder name
const compMap = companies.map(company => company.founder);
```

4. reduce
```javascript
// get the total year 
const compReduce = companies.reduce((total, company) => total+=company.year, 0);
```

