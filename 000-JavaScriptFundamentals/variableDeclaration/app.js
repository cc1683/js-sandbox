//* var, let, const

var name = 'John Doe';
console.log(name);
name = 'Steve Smith';
console.log(name); //! reassign variable's value

//* Init var
var greeting;
console.log(greeting);

//* letters, numbers, _, $
//! Cannot start with NUMBER

//* Multi word variable
var firstName = 'John'; //* Camel case
var first_name = 'Sara'; //* Underscore
var FirstName = 'Tom'; //* Pascal case
var firstname;

//* Const

const age = 10;
console.log(age); 
// age = 12; //! Cannot reassign const variable

// const num; //! Need to assign a value

const person = {
  name: 'John',
  age: 22,
  job: 'Web Developer'
};

console.log(person.name);

person.name = 'Steve';
console.log(person.name); //! the key pair value are allow to change in const object

const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
numbers.push(6);
console.log(numbers); //! the array value are allow to change in const array

// numbers = [1, 2, 3, 4, 5 ,6]; //! this is not allow, since the whole array is reassign!
numbers[0] = 100;
console.log(numbers);