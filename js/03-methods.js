/* const user1 = {
  name: 'Vasya',
};
const user2 = {
  name: 'Petya',
};
const user3 = {
  name: 'Kolya',
}; */
/* function sayhello() {
  console.log('Hello');
} */

/* const user = {
  name: 'Volodka',
  tesla() {
    console.log(this.name);
  },
};
user.tesla.call(user2); */

/* function showName(a, b) {
    console.log(this.name, a + b);
    
}
showName.call(user1, 10, 20);
showName.apply(user1, [10,20]) */

/* const changeColor = function (color) {
  console.log('changeColor -> this', this);
  this.color = color;
};
const hat = {
  color: 'black',
};
const sweater = {
  color: 'green',
};
changeColor.call(sweater, 'red');
console.log(sweater); */

/* function foo(a, b, c, d) {
  console.log(this, a, b, c, d);
}
const user = {
  name: 'Volodka',
};
const copy2 = foo.bind(user, 10, 20);
copy2(30, 40); */
// console.log(copy2);

/* const changeColor = function (color) {
  // console.log('changeColor -> this', this);
  this.color = color;
};
const hat = {
  color: 'black',
};
const sweater = {
  color: 'green',
};
changeColor.call(hat, 'white');
console.log(hat);

const changeHatColor = changeColor.bind(hat);
const changeSweaterColor = changeColor.bind(sweater);
changeHatColor('yellow');
console.log(hat);
changeSweaterColor(sweater);
 */

/* function foo() {
  const value = 10;
  function test() {
    console.log(value);
  }
  const x = test;
  return x;
}
const result = foo();
result(); */

/* 
function getCalc(firstName) {
  const x = 10;
  function calc(a, b) {
    console.log(firstName, a + b + x);
  }
  return calc;
}
const calc1 = getCalc('Volodka');
calc1(10, 20); */

/* function getCounter() {
  let x = 0;
  function increment() {
    console.log(x++);
  }
  return increment;
}

const firstIncrement = getCounter();
const secondIncrement = getCounter();
firstIncrement();
firstIncrement();
firstIncrement();
firstIncrement();
firstIncrement();
secondIncrement();
secondIncrement();
secondIncrement();
secondIncrement();
secondIncrement(); */

function foo() {
  const arrow = () => {
    console.log(this);
  };
  arrow();
}
foo.call({ name: 'Vasya' });
