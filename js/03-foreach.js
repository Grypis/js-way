/* const arr = [1, 3, 5, 6, 2, 1, 4, 6];
arr.forEach((el, i, arr) => {
  console.log(el);
}); */

/* const numbers = [5, 10, 15, 20, 25];
let total = 0;
numbers.forEach(num => (total += num));
console.log(total); */

/* function logItems(items) {
  console.log(items);
  items.forEach((el, i) => {
    console.log(`${i + 1} - ${el}`);
  });
}
logItems(['Mango', 'Poly', 'Ajax']); */

/* function printContactsInto({ names, phones }) {
  const nameList = names.split(',');
  const phoneList = phones.split(',');
  nameList.forEach((el, i, arr) => {
    console.log(`${el}: ${phoneList[i]}`);
  });
}
printContactsInto({
  names: 'Jacob,Willian,Solomon,Artemis',
  phones: '123,312,223,412',
}); */

/* function caclucateAvarage(...args) {
  let total = 0;
  //   for (let i = 0; i < args.length; i++) {
  //     total += args[i];
  //     }

  args.forEach(el => {
    total += el;
  });
  return total / args.length;
}
console.log(caclucateAvarage(1, 2, 3, 4)); // 2.5
console.log(caclucateAvarage(14, 8, 2)); // 8 */
