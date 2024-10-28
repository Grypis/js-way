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

//!=========================
/* ## Example 1 - Базові операції з масивом

1. Створіть масив `genres` з елементами "Jazz" та "Blues".
2. Додайте «Рок-н-рол» до кінця.
3. Виведіть у консоль перший елемент масиву.
4. Виведіть останній елемент масиву в консоль. Код повинен працювати для масиву
   довільної довжини.
5. Видаліть перший елемент та виведіть його в консоль.
6. Вставте «Country» та «Reggae» на початок масиву. */

/* const genres = ['Jazz', 'Blues'];
genres.push('Rock-n-roll');
console.log(genres);
console.log(genres.slice(0, 1));
console.log(genres.slice(-1));
console.log(genres.shift());
genres.unshift('Country', 'Reggae');
console.log(genres);
 */

//!====================================
/* ## Example 2 - Масиви та рядки

Напиши скрипт для обчислення площі прямокутника зі сторонами, значення яких
зберігаються у змінній `values` у вигляді рядка. Значення гарантовано розділені
пробілом.
 */
/* const values = '8 11';
console.log(values);
const spl = values.split(' ');
console.log(spl);
const height = +spl[0];
const width = +spl[1];
const area = height * width;
console.log(area); */

//!==================================
/* ## Example 3 - Перебір масиву

Напиши скрипт для перебору масиву `fruits` циклом `for`. Для кожного елемента
масиву виведи в консоль рядок у форматі `номер_елемента: значення_елемента`.
Нумерація елементів має починатися з `1`.
 */

/* const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];
for (let i = 0; i < fruits.length; i++) {
  const message = `${i + 1}: ${fruits[i]}`;
  console.log(message);
} */

//!================================
/*   ## Example 4 - Масиви та цикли

Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача. У
змінних `names` та `phones` зберігаються рядки імен та телефонних номерів,
розділені комами. Порядковий номер імен та телефонів у рядках вказують на
відповідність. Кількість імен та телефонів гарантовано однакова. */

/* const names = 'Jacob, William, Solomon, Artemis';
const phones = '89001234567,89001112233,890055566377,890055566300';
const userName = names.split(',');
const userPhone = phones.split(',');
console.log(userName);
console.log(userPhone);
for (let i = 0; i < userName.length; i++) {
  const names = userName[i].trim();
  const phones = userPhone[i].trim();
  console.log(`${names} - ${phones}`);
} */

//!================================
/*   ## Example 5 - Масиви та рядки

Напиши скрипт який виводить у консоль усі слова рядка окрім першого та
останнього. Результуючий рядок не повинен починатися або закінчуватися символ
пробілу. Скрипт повинен працювати для будь-якого рядка. */

/* const string = 'Welcome to the future';
const newStr = string.split(' ').slice(1, -1).join(' ').trim();
console.log(newStr); */

//!=================================
/* ## Example 6 - Масиви та рядки

Напиши скрипт, який «розгортає» рядок (зворотний порядок літер) і виводить її в
консоль. */

/* const string = 'Welcome to the future';
const mes = string
  .replaceAll('Welcome to the future', 'future to the welcome')
  .toLocaleLowerCase();
console.log(mes); */

//!===================================
/* ## Example 7 - Сортування масиву з циклом

Напиши скрипт сортування масиву рядків в алфавітному порядку за першою літерою
елемент. */

/* const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
console.log(langs.sort()); */

//!====================================
/* ## Example 8 - Пошук елемента

Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати для
будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.
 */

/* const numbers = [2, 17, 94, 1, 23, 37];
let min = numbers[0];
for (const number of numbers) {
  if (number < min) {
    min = number;
  }
}
console.log(min); // 1 */
