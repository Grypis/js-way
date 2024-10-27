/*
 * Methods of arrays
 *
 * - join
 * - split
 * - slice
 * - concat
 * - indexOf
 * - push/pop
 */
//!======================================
/* const courses = [
  '<li>HTML</li>',
  '<li>CSS</li>',
  '<li>JavaScript</li>',
  '<li>React</li>',
  '<li>PostgreSQL</li>',
];
const res = courses.join('\n'); // string
console.log(res); */

//!======================================
// З рядка робить масив
/* const str = 'Hello world';
const res = str.split(' ');
console.log(res); // Hello, world */

/* const str = 'awwe awad awdad awd awd adwa awd';
const arr = str.split(' ');
 */

//!======================================
/* const arr = [1, 2, 3, 4, 5, 6];
const copy = arr.slice(3, -1);
console.log(copy); */

//!======================================
/* const x = [1, 2, 3];
const y = [4, 5, 6];
const q = [7, 8, 9];
const res = [].concat(x, y, q, ['aaw', 'aw']);
// const res = x.concat(y, q);
console.log(res);
 */

//!======================================
/* const arr = [1, 3, 3, 21, 2, 34, 5, 6];
// const index = arr.indexOf(0);
const index = arr.includes(2); // true
console.log(index); // -1
 */
//!======================================
/* const arr = ['Dnipro', 'Kyiv', 'Lviv', 'Odessa'];
arr.pop();
console.log(arr); // ['Dnipro', 'Kyiv', 'Lviv'];
// arr.push('END1', 'END2', 'END3'); */

/* const arr = ['Dnipro', 'Kyiv', 'Lviv', 'Odessa'];
arr.shift();
console.log(arr); // ['Kyiv', 'Lviv', 'Odessa']; */

/* const arr = ['Dnipro', 'Kyiv', 'Lviv', 'Odessa'];
arr.unshift('BEGIN');
console.log(arr); // ['BEGIN', 'Dnipro', 'Kyiv', 'Lviv', 'Odessa']
 */

/* const arr = ['Dnipro', 'Kyiv', 'Lviv', 'Odessa'];
arr.splice(1, 0, 'test');
console.log(arr); // ['Dnipro', 'test', 'Kyiv', 'Lviv', 'Odessa'];
 */
