/* function sum(x, y) {
  const result = x + y;
  return result;
}
const x1 = sum(2, 4);
console.log(x1); */

/* function test() {
  console.log(arguments);
}
test(10, 20, 30);
 */

/* const res = Math.max(10, 20, 30, 40);
console.log(res);
 */

/* const arr = [];
arr.push(1, 2, 3);
console.log(arr);
 */

/* function test(x1, x2) {
  console.log(arguments);
  console.log([]);
}
test(1, 2, 3, 4, 5, 6, 7, 8); */

/* function test(x1, x2) {
  const args = Array.from(arguments);
  console.log(args);
}
test(1, 2, 3, 4, 5, 6, 7, 8); */

/* function fn() {
  const args = Array.from(arguments);
  console.log(args);
}
fn(1, 2, 3);
fn(1, 2, 3, 4, 5);
fn(1, 2, 3, 4, 5, 6, 7, 8); */

/* function calculateTotal() {
  const args = Array.from(arguments);
  let sum = 0;
  console.log(args);
  for (const item of args) {
    console.log(`${sum} += ${item}`);
    sum += item;
  }
  return sum;
}
const x1 = calculateTotal(10, 20, 30);
console.log(x1); */

/* function calcAvarage() {
  const args = Array.from(arguments);
  let total = 0;
  for (const arg of args) {
    total += arg;
  }
  return total / args.length;
}
console.log(calcAvarage(1, 2, 3, 4)); // 2.5 */

/* function myArr() {
  const args = Array.from(arguments);
  const result = [];
  for (const arg of args) {
    if (arg % 2 === 0) {
      result.push(arg);
    }
  }
  return result;
}
const arr1 = myArr(2, 4, 6, 8, 7);
console.log(arr1); */

/* function getPositiveArr() {
  const args = Array.from(arguments);
  const result = [];
  for (const arg of args) {
    if (arg >= 0) {
      result.push(arg);
    }
  }
  return result;
}
const numbers = getPositiveArr(2, 0, -1, 4, 12, -12);
console.log(numbers); */

/* function getArr() {
  const args = Array.from(arguments);
  const total = [];
  const min = args.shift();
  for (const arg of args) {
    if (arg >= min) {
      total.push(arg);
    }
  }
  return total;
}
const arr1 = getArr(5, 12, 4, 56, 7, 8);
console.log(arr1); */
