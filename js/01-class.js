/* const username1 = 'Vlad';
const username2 = 'Artem';
const username3 = 'Nikita';

function showUsername1() {
  console.log(username1);
  console.log(username2);
  console.log(username3);
}
function showUsername2() {
  console.log(username1);
  console.log(username2);
  console.log(username3);
}
function showUsername3() {
  console.log(username1);
  console.log(username2);
  console.log(username3);
}
 */

/* const user = {
  name: 'Vlad',
  showName() {
    console.log(this.name);
  },
};
const user2 = {
  name: 'Max',
  showName() {
    console.log(this.name);
  },
};
const user3 = {
  name: 'Ivan',
  showName() {
    console.log(this.name);
  },
}; */

/* class User {
  name = 'Anonym';
  age = 10;
  city = 'Dnipro';
  country = 'Ukraine';
}
const user1 = new User();
console.log(user1); */

/* function foo() {
  this.name = 'Hello world';
  return this;
}
const test = new foo();
console.log(test);
 */

/* class User {
  constructor(name, age, city, country) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.country = country;
  }
  showInfo() {
    const info = `Name: ${this.name}
      Age: ${this.age}`;
    console.log(info);
  }
  showName() {
    console.log('Name:', this.name);
  }
  setAge(newValue) {
    this.age = newValue;
  }
}
const user1 = new User('Vlad', 23, 'Lviv', 'Ukraine');
user1.showInfo();
user1.showName(); */
