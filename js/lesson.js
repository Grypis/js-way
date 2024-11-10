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
const str = 'ротатор'; // true
const newString = 'Hello'; // false

/* const newStr = str.split('').reverse().join('');
console.log(newStr);
console.log(str === newStr);
const newStr2 = newString.split('').reverse().join('');
console.log(newStr2);
console.log(newStr2 === newString); */
function isPolindrome(string) {
  const newStr = string.split('').reverse().join('');
  console.log(newStr === string);
}
isPolindrome(str);
isPolindrome();
//! Task - 5
