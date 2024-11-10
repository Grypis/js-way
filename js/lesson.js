//! Task - 1
/* const styles = ['Dhaz', 'Bluz'];
styles.push('Rock-en-roll');
console.log(styles);
styles.splice(1, 1, 'Classic');
console.log(styles);
const del = styles.shift();
console.log(del);
console.log(styles);
styles.unshift('Rap', 'Reggie');
console.log(styles);
 */

//! Task - 2
/* const items = ['Mango', 'Poly', 'Ajax'];
for (let i = 0; i < items.length; i++) {
  console.log(`${i} - ${items[i]}`);
} */

//! Task - 3
// const numbers = [2, 17, 94, 1, 23, 37];
/* function findSmallestNumber(numbers) {
  let result = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < result) {
      result = numbers[i];
    }
  }
  return result;
}
console.log(findSmallestNumber([2, 12, 94, 1, 37])); */

//! Task - 4
// Паліндром
/* const str = 'ротатор'; // true
const newString = 'Hello'; // false */

/* const newStr = str.split('').reverse().join('');
console.log(newStr);
console.log(str === newStr);
const newStr2 = newString.split('').reverse().join('');
console.log(newStr2);
console.log(newStr2 === newString); */
/* function isPolindrome(string) {
  const newStr = string.split('').reverse().join('');
  console.log(newStr === string);
}
isPolindrome(str);
isPolindrome(newString); */

//! Task - 5
/* function caclucateAvarage(...args) {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total / args.length;
}
console.log(caclucateAvarage(1, 2, 3, 4)); // 2.5
console.log(caclucateAvarage(14, 8, 2)); // 23.2
console.log(caclucateAvarage(27, 43, 2, 8, 36)); // 23.2 */

//! Task - 6
// Capitalize
/* function capitalize(string) {
  const newStr = string.split(' ');
  const wordArr = [];
  for (const item of newStr) {
    let firstLetter = item[0].toUpperCase();
    let lastLetter = item.slice(1);
    let newWord = `${firstLetter}${lastLetter}`;
    wordArr.push(newWord);
  }
  console.log(wordArr.join(' '));
}
capitalize('the quick brown fox'); // 'The Quick Brown Fox' */

//! Task - 7
/* const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];
function addCourse(course) {
  if (courses.includes(course)) {
    console.log('Course alredy added');
    return;
  }
  courses.push(course);
}
console.log(addCourse('Express'));
console.log(addCourse('CSS'));
console.log(courses);

function removeCourse(remCourse) {
  const index = courses.indexOf(remCourse);
  if (index === -1) {
    return 'Course not found';
  }
  courses.splice(index, 1);
}
console.log(removeCourse('React'));
console.log(removeCourse('Vue.js'));

function updateCourse(oldName, newName) {
  const index = courses.indexOf(oldName);
  if (index !== -1) {
    courses.splice(index, 1, newName);
  }
  return courses;
}
console.log(updateCourse('Express', 'NestJS')); */

//! Task - 8
/* const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

function teamSalaty(salaries) {
  let result = Object.values(salaries);
  console.log(result);
  let sum = 0;
  for (let elem of result) {
    sum += elem;
  }
  return sum;
}
console.log(teamSalaty(salaries));
 */

//! Task - 9
/* const calc = {
  a: null,
  b: null,

  read() {
    (this.a = Number(prompt('Enter a'))), (this.b = Number(prompt('Enter b')));
  },

  sum() {
    return this.a + this.b;
  },

  mult() {
    return this.a * this.b;
  },
};
calc.read();
console.log(`sum`, calc.sum());
console.log(`mult`, calc.mult()); */
