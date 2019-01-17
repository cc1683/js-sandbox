//* Function Declaration

function greet() {
  // console.log('Hello World');
  return 'Hello World';
}

console.log(greet());

//* Parameters

function callName(user) {
  console.log(user);
}

callName('Steve');

//* Function Expression

const square = function(x) {
  return x * x;
};

console.log(square(4));

//* Imediately invokable function expression - init and run at the same time

(function() {
  console.log('INFE Ran....');
})();

(function(name) {
  console.log('Welcome '+name);
})('John Doe');