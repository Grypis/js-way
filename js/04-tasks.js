/* function logItems(items) {
  for (let i = 0; i < items.length; i++) {
    console.log(`${i + 1} - ${items[i]}`);
  }
}

logItems(['Mango', 'Poly', 'Ajax']);
logItems(['apple', 'grapes', 'pear', 'banana', 'lemon']); */

/* function printInfo(names, phones) {
  names = names.split(',');
  phones = phones.split(',');
  for (let i = 0; i < names.length; i++) {
    console.log(`${names[i]} - ${phones[i]}`);
  }
}
printInfo('Jacob,William,Solomon,Artemis', '123,4124,1223,1234');
 */

/* function formatTime(totalMinutes) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  const result = `${hours.toString().padStart(2, 0)}:${minutes
    .toString()
    .padStart(2, 0)}`;
  return result;
}
console.log(formatTime(200)); // 03:20 */

/* function fillArray(min, max) {
  const arr = [];
  for (let i = min; i <= max; i += 2) {
    arr.push(i);
  }
  return arr;
}
const myArr1 = fillArray(20, 50);
console.log(myArr1); */

/* function showStr(string) {
  for (let i = 0; i < string.length; i += 2) {
    console.log(string[i]);
  }
}
showStr('Hello world'); */

/* function reverseString(string) {
  for (let i = string.length - 1; i >= 0; i--) {
    console.log(string[i]);
  }
}
reverseString('Hello'); */

/* function showString(string) {
  for (const symbol of string) {
    console.log(symbol);
    if (symbol === ' ') break;
  }
}
showString('Hello world'); */

/* const myUrl = 'Hello world.com';
const result = myUrl.toLocaleLowerCase().replaceAll(' ', '_');
console.log(result); */

/* function sum(x = 0, y = 0) {
  if (x === undefined || y === undefined) return;
  console.log('x:', x);
  console.log('y:', y);
  console.log('x + y =', x + y);
}
sum(2, 5); */
