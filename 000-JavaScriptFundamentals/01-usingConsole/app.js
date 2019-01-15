//* Using the browser console

console.log(`Hello World!`); //* string
console.log(123456); //* number
console.log(123+123); //* Math
console.log([1, 2, 3, 4]); //* array
console.log({
  a: 1,
  b: 2,
  c: 3
}); //* object

var greeting = 'Hello World!';
console.log(`Message: ${greeting}`); //* variable

console.table({
  red: 'apple',
  yellow: 'banana',
  green: 'watermelon'
}) //* object in table format

console.error(`This is some error!`); //* show error message
console.warn(`This is some warning`); //* show warning message

// console.clear(); //* clear the console

console.time(`Time`);
  console.log(`Counting 1`);
  console.log(`Counting 2`);
  console.log(`Counting 3`);
  console.log(`Counting 4`);
  console.log(`Counting 5`);
console.timeEnd(`Time`); //* time taken to execute counting 1 to 5