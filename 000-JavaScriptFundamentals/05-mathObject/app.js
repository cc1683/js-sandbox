const num1 = 100;
const num2 = 50;
let val;

//* Basic math operator
val = num1+num2;
val = num1*num2;
val = num1-num2;
val = num1%num2;
val = num1/num2;

//* Math object
val = Math.PI;
val = Math.E;
val = Math.round(2.4);
val = Math.ceil(2.4);
val = Math.floor(2.8);
val = Math.sqrt(64);
val = Math.abs(-3);
val = Math.pow(2, 2);
val = Math.min(2, 4, 56, 0, 67);
val = Math.max(2, 4, 56, 0, 67);
val = Math.random(); //* return random decimal
val = Math.random() * 20; //* return random decimal between 0 - 20
val = Math.random() * 20 + 1; //* return random decimal between 1 - 20
val = Math.floor(Math.random() * 20 + 1); //* return random integer between 1 - 20

console.log(val);