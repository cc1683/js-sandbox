const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 30,
  email: 'steve@gmail.com',
  hobbies: ['football', 'kpop'],
  address: {
    city: 'Miami',
    state: 'ML'
  },
  getBirthYear: function() {
    return 2019 - this.age;
  }
};

let val;

val = person.firstName;
val = person.lastName;
val = person.age;
val = person.email;
// val = person['firstName'];
val = person.hobbies[1];
val = person.address.city;
val = person.getBirthYear();

const people = [
  {name: 'John', age: 21},
  {name: 'Steve', age: 33},
  {name: 'William', age: 31}
];

for(let i =0; i<people.length; i++) {
  console.log(people[i].name);
}

console.log(val);