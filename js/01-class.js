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

/* class Dog {
  constructor(name, age, breed, color) {
    this.name = name;
    this.age = age;
    this.legs = 4;
    this.breed = breed;
    this.color = color;
  }
  sauWoof() {
    console.log('Woof');
  }

  sayName() {
    console.log('Name', this.name);
  }
}
const dog1 = new Dog('Lana', 5, 'spaniel', 'gold');
dog1.sauWoof(); */

/* class Dog {
  #legs;
  #breed;
  #age;

  constructor(name, age, breed, color) {
    this.name = name;
    this.#age = age;
    this.#legs = 4;
    this.#breed = breed;
    this.color = color;
  }
  sauWoof() {
    console.log('Woof');
  }

  sayName() {
    console.log('Name', this.name);
  }
  getBreed() {
    return this.#breed;
  }
  getLegs() {
    return this.#legs;
  }
  getAge() {
    return this.#age;
  }
  setAge(newValue) {
    if (newValue > this.#age && newValue < 100) {
      this.#age = newValue;
    } else {
      console.log('Error');
    }
  }
}
const dog1 = new Dog('Lana', 5, 'spaniel', 'gold');
console.log(dog1.getBreed());
dog1.setAge(6);
console.log(dog1.getAge()); */

/* class Dog {
  #legs;
  #breed;
  #age;

  constructor(name, age, breed, color) {
    this.name = name;
    this.#age = age;
    this.#legs = 4;
    this.#breed = breed;
    this.color = color;
  }
  get legs() {
    return this.#legs;
  }
  get breed() {
    return this.#breed;
  }
  get age() {
    return this.age;
  }
  set age(newValue) {
    if (newValue > this.#age) {
      this.#age = newValue;
    } else {
      console.log(`Age must be more than ${this.#age}`);
    }
  }
  get info() {
    return `${this.name} is ${this.#breed}, ${this.color}`;
  }
}
const dog1 = new Dog('Lana', 5, 'spaniel', 'gold'); */
/* dog1.age = 5;
dog1.age = 10;
console.log(dog1.info); */

/* class Calc {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  sum() {
    const result = `${this.#getStr()}\nx+y=${this.x + this.y}`;
    return result;
  }

  #getStr() {
    return `x:${this.x};\ny:${this.y}`;
  }
}
const calc1 = new Calc(10, 20);
console.log(calc1.sum()); */

/* class User {
  constructor(name, age, city, country) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.country = country;
  }

  toString() {
    let result = '';

    result += this.#getName() + '\n';
    result += this.#getAge() + '\n';
    result += this.#getLocation() + '\n';

    return result;
  }

  #getName() {
    return `Name: ${this.name}`;
  }
  #getAge() {
    return `Age: ${this.age}`;
  }
  #getLocation() {
    return `Location:\n- city ${this.city}\n- country ${this.country}`;
  }
}

const user = new User('Vlad', 20, 'Lviv', 'Ukraine');
console.log(user.toString()); */

/* class Tesla {
  static discount = 0.05;
  constructor(model, price, color) {
    this.model = model;
    this.price = price;
    this.color = color;
    this.discount = 5;
  }

  showPrice() {
    console.log('Price', this.price);
    console.log('With discount', this.price * (1 - Tesla.discount));
  }
}

const car1 = new Tesla('model S', 30000, 'white');
const car2 = new Tesla('model S', 35000, 'white');

console.log(car1);
console.log(car2);
car1.showPrice();
car2.showPrice();
Tesla.discount = 0.1;
car1.showPrice();
car2.showPrice(); */
