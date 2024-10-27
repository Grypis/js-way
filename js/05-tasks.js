//! цикл for...of
/* const salaries = [500, 600, 100, 500, 200, 700];
let total = 0;
for (const salary of salaries) {
  total += salary;
}
console.log(total); */

/* const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
for (const friend of friends) {
  console.log(friend);
} */

/* const value = '8 11';
const numbers = value.split(' ');
// console.log(numbers);
const width = +numbers[0];
const height = +numbers[1];
// console.log(width);
// console.log(height);
const area = width * height;
console.log(area); */

/* const fruits = ['apple', 'grapes', 'pear', 'banana', 'lemon'];
for (let i = 0; i < fruits.length; i++) {
  const message = `number ${i + 1}: ${fruits[i]}`;
  console.log(message);
}
 */
//! парні
/* const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
let total = 0;
for (const num of numbers) {
  if (num % 2 === num) {
    total += num;
  }
}
console.log(total); */

//! не парні
/* const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
let total = 0;
for (const num of numbers) {
  if (num % 2 !== num) {
    total += num;
  }
}
console.log(total); */

//!==========================
/* const names = 'Jacob,Willian,Solomon,Artemis';
const phones = '132,312,123,332';
const namesArr = names.split(',');
const phonesArr = phones.split(',');
console.log(namesArr);
console.log(phonesArr);
for (let i = 0; i < namesArr.length; i++) {
  const name = namesArr[i];
  const phones = phonesArr[i];
  console.log(`${name} - ${phones}`);
} */

//!==========================
/* const string = 'Welcome to the future';
const res = string.split(' ').slice(1, -1).join(' ').trim();
console.log(res); */

//!==========================
/* const values = [2, 17, 94, 1, 32];
let min = values[0];
for (const value of values) {
  if (value < min) {
    min = value;
  }
} */
//!==========================
/* let message = 'Hello world';
const res = message.toLowerCase().replaceAll(' ', '_');
console.log(res);
 */
