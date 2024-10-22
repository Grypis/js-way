// Task 1
/* const name = 'Halina';
const age = 35;
const bobbie = 'JavaScript';
const message = `Good day, my name is ${name}, I am ${age} years old, I am learning ${bobbie}`;
console.log(message); */

// Task 2
/* const name = prompt('Enter your name');
const mail = prompt('Enter your email');
const tel = prompt('Enter your phone number');
console.log(`User ${name} uses ${mail} mail and ${tel} phone number`); */

// Task 3
/* const tv = Number(prompt('Enter price of TV'));
const phone = Number(prompt('Enter price of phone'));
const refr = Number(prompt('Enter price of refr'));
const message = tv + phone + refr;
console.log(`All price is ${message}`); */

// Task 4
/* const year = 12;
const userMessage = Number(prompt('Enter how many month in a year'));
if (userMessage === year) {
  console.log('+');
} else {
  console.log('Are you dumb');
}

const ternr =
  userMessage === year ? console.log('+') : console.log('Are you dumb'); */

//   Task 5
/* const number = Number(prompt('Enter a number'));
if (number % 2 === 0) {
  console.log('Парне');
} else {
  console.log('Непарне');
}

const ternr = Number(prompt('Enter a number'))
  ? console.log('Парне')
  : console.log('Непарне'); */

//   Task 6
/* const month = Number(prompt('Enter your mount'));
if (month === 3 || month === 4 || month === 5) {
  alert('Spring');
} else if (month === 6 || month === 7 || month === 8) {
  alert('Summer');
} else if (month === 9 || month === 10 || month === 11) {
  alert('Autumn');
} else if (month === 12 || month === 1 || month === 2) {
  alert('Winter');
} else {
  alert('Invalid number');
} */

// Task 7
/* const day = 1.99;
const week = 5.99;
const month = 10.99;
const year = 100.99;
const ask = prompt('Enter subscribe period').toLocaleLowerCase();
if (ask === 'day') {
  console.log('Day :', day);
} else if (ask === 'week') {
  console.log('Week :', week);
} else if (ask === 'month') {
  console.log('Month :', month);
} else if (ask === 'year') {
  console.log('Year :', year);
} else {
  console.log('Invalid value');
}

switch (ask) {
  case 'day':
    console.log('Day:', day);
    break;
  case 'week':
    console.log('Week:', week);
    break;
  case 'month':
    console.log('Month:', month);
    break;
  case 'year':
    console.log('Year:', year);
    break;
  default:
    console.log('Invalid value');
    break;
} */

// Task 8
/* const login = prompt('Enter login');
const password = Number(prompt('Enter password'));
const userLogin = 'Log';
const userPassword = 123;
if (login === userLogin && password === userPassword) {
  console.log('All good');
} else {
  console.log('Error');
}

const ternr =
  login === userLogin && password === userPassword ? 'All good' : 'Error';
console.log(ternr);
 */

// Task 9
/* const min = 1;
const max = 50;
for (let i = min; i <= max; i++) {
  if (i % 10 === 0) {
    console.log(i);
  }
}
 */

// Task 10
/* const username = prompt('Name');
if (username.length > 7) {
  console.log('Big boy');
} else {
  console.log('Kitty');
} */
