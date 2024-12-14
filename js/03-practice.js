//! Task - 1
/* function letMeSeeYourName(callback) {
  const userName = prompt('Enter your name');
  callback(userName);
}
function greet(name) {
  console.log(`Hi ${name}`);
}
letMeSeeYourName(greet); */

//! Task - 2
/* const makeProduct = (name, price, callback) => {
  const obj = {
    name,
    price,
    id: Date.now(),
  };
  callback(obj);
};

const showProduct = product => console.log(product);

makeProduct('Refr', 10000, showProduct);
 */

//! Task - 3
/* const scientistByBorn = scientists.filter(scientist => scientist.born > 1799 && scientist.born < 1900).map(scientist => `${scientist.name} ${scientist.surname}`)
console.log(scientistByBorn); */

//! Task - 4
/* const scientistLife = scientists.reduce((acc, scientist) => (scientist.dead - scientist.born) + acc);
console.log(scientistLife / scientist.lenght); */

//! Task - 5
/* const sorted = scientist.toSorted((a, b) => a.localCompare(b));
console.log(sorted);
 */

//! Task - 6
/* const younger = scientists.toSorted(
  (a, b) => a.dead - a.born - (b.dead - b.born),
);
console.log(younger); */

//! Task - 7
/* const scientistByBorn = scientists
  .filter(scientist => scientist.born > 1399 && scientist.born < 1700)
  .map(scientist => `${scientist.name} ${scientist.surname}`);
console.log(scientistByBorn); */

//! Task - 8
/* const someScientist = scientists.find(scientists.find(scientist => scientists.name === 'Albert' && scientist.surname === 'Einstein'))
console.log(someScientist); */

//! Task - 9
/* const newArrCourses = courses.flatMap(course => courses.topics);
console.log(newArrCourses);
const uniqueTopics = newArrCourses.filter(
  (el, i, arr) => arr.indexOf(el) === i,
);
console.log(uniqueTopics); */

//! Task - 10
/* class User {
  constructor(username, age, numberOfPosts) {
    this.username = username;
    this.age = age;
    this.numberOfPosts = numberOfPosts;
  }

  getInfo() {
    return `User ${this.username} is ${this.age} years old and has ${this.numberOfPosts} posts`;
  }
}
const newUser = new User('Sasd', 57, 45);
console.log(newUser); */

//! Task - 11
/* class Person {
  constructor(firstName, lastName, age, gender, interest) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.interest = interest;
  }

  bio() {
    console.log(
      `Hello ${this.firstName} I'm ${this.age} age. I like ${this.interest} `,
    );
  }
  greeting() {
    console.log(`Hello ${this.firstName}`);
  }
}

const newPerson = new Person('Sam', 'Olov', 23, 'male', 'socced');
console.log(newPerson); */
