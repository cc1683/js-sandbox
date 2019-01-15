let val;

//* Number to String
val = String(5);

//* Boolean to String
val = String(false);

//* Date to String
val = String(new Date());

//* Array to String
val = String([1, 2, 3, 4, 5]);

//! toString()
val = (5).toString();

//* String to number
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('hello'); //! NaN = Not a number

//! parseInt()
val = parseInt('100.30'); //* Integer
val = parseFloat('100.30'); //* Decimal

//* Output
console.log(val);
console.log(typeof val);
// console.log(val.length);
console.log(val.toFixed());

const val1 = String(10);
const val2 = 10;
const sum = val1 + val2;

console.log(sum); 
console.log(typeof sum);