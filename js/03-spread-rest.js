/* function getTotal(a, b, ...nums) {
  console.log(nums);
}
getTotal(1, 2, 3, 4, 5); */

/* function getTotal(min, ...arr) {
  let total = 0;
  for (const item of arr) {
    if (item > min) {
      total += item;
    }
  }
  return total;
}
const result = getTotal(3, 1, 2, 3, 4, 5);
console.log(result); */

/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const copy = [...numbers];
console.log(copy); */

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];
const result = ['Start', ...arr1, ...arr2, ...arr3, 'End'];
console.log(result);
