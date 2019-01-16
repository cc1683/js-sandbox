const numbers = [1, 2, 3, 4, 5, 6];
const numbers2 = new Array(22, 43, 56, 77, 32, 100);
const fruits = ['Apple', 'Orange', 32, 345];

let val;

val = numbers.length;
val = Array.isArray(numbers);
val = numbers[3];
val = numbers[0];
numbers.push(23234); //* add to back
val = numbers.indexOf(3);

numbers.unshift(120); //* add to front
numbers.pop(); //! remove from back
numbers.shift(); //! remove from front

numbers.splice(0, 1); //* index 0~1 removed
numbers.reverse();

val = numbers.concat(numbers);

val = numbers2.sort(); //! only sort the first digit!

val = numbers2.sort((x, y) => {
  return x-y;
});

//* Reverse sort
val = numbers2.sort((x, y) => {
  return y-x;
});

function under50(num) {
  return num < 50;
}

val = numbers2.find(under50); //* return first number that under 50


// console.log(numbers);
// console.log(numbers2);
// console.log(fruits);

console.log(numbers);
console.log(val);