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

/* const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];
const result = ['Start', ...arr1, ...arr2, ...arr3, 'End'];
console.log(result); */

/* const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];
const result = Math.max(...arr1, ...arr2, ...arr3);
console.log(result); */

/* const arr1 = [1, 2, 3];
const result = [1, 3, 5, 1, 7, 3, 66];
result.push(...arr1);
result.unshift(...arr1);
console.log(result);
 */

/* const temps = [18, 14, 12, 21, 17, 29, 24];
const minTemp = Math.min(...temps);
console.log(minTemp);
const maxTemp = Math.max(...temps);
console.log(maxTemp); */

/* const a = [{ x: 1 }, { y: 2 }, { t: 3 }];
const b = [...a];
/* console.log('a: ', a);
console.log('b :', b);
console.log(a === b); */
/* a[0].x = 25;
console.log(b[0].x); */

/* const objA = { x: 1, y: 2 };
const objB = { x: 0, t: 3 };
const onjC = { ...objA, ...objB };
console.log(onjC);
 */

/* const defaultSettings = {
  theme: 'light',
  showNotifications: true,
  hideSidebar: false,
};

const userSettings = {
  showNotifications: false,
  hideSidebar: true,
};

const finalSettings = {
  ...defaultSettings,
  ...userSettings,
};
console.log(finalSettings); */
