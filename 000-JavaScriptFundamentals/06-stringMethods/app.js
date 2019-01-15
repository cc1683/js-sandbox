const firstName = 'William';
const lastName = 'Johnson';
const age = 20;
const str = 'Hello there my name is Steve';
const tags = 'web development, web design, SEO, eCommerce';

let val;

val = firstName+lastName;
val = firstName+' '+lastName; 

//* Append
val = 'John ';
val += 'Doe'

val = `Hello my name is ${firstName} and my age is ${age}`;
val = 'That\'s awesome';
val = firstName.length;
val = firstName.concat(' ', lastName);
val = firstName.toLowerCase();
val = firstName.toUpperCase();

val = firstName[0]; 
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');
val = firstName.charAt(2);
val = firstName.charAt(firstName.length - 1); //* get the last index

val = firstName.substring(0, 4); //* 0~3
val = firstName.slice(0, 4);
val = firstName.slice(-3); //* last 3 characters

val = str.split(' ');
val = tags.split(',');

val = str.replace('Steve', 'John');
val = str.includes('Hello');

console.log(val);