/* const numbers = [1, 9, 6, 2, 3];
const sorted = numbers;
console.log('sorted ', sorted); */

/* const arr = [1, 2, 3, 4, 2, 3, 12, 31, 23, 12, 3, 231, 23, 12, 3, 23];
const result = arr.toSorted();
console.log(result); */

/* const numbers = [1, 9, 6, 2, 3];
const sorted = numbers.toSorted((right, left) => {
  return right - left;
});
console.log('sorted ', sorted);
 */

const players = [
  {
    id: 'player-1',
    name: 'Mango',
    timePlayer: 310,
    online: true,
  },
  {
    id: 'player-2',
    name: 'Poly',
    timePlayer: 470,
    online: false,
  },
  {
    id: 'player-3',
    name: 'Kiwi',
    timePlayer: 230,
    online: true,
  },
  {
    id: 'player-4',
    name: 'Ajax',
    timePlayer: 150,
    online: false,
  },
  {
    id: 'player-5',
    name: 'Chelsy',
    timePlayer: 280,
    online: true,
  },
];

/* const sortedByBestPlayer = players.toSorted((a, b) => {
  return a.timePlayer - b.timePlayer;
});
console.table(sortedByBestPlayer); */

/* const result = players.toSorted((a, b) => {
  return a.name.length - b.name.length;
});
console.table(result); */

/* const str1 = 'AHello';
const str2 = 'BHello';
const result = str2.localeCompare(str1);
console.log(result); */

/* const result = players.toSorted((a, b) => {
  return a.name.localeCompare(b.name);
});
console.table(result); */

//!===============================================================
/* const result = cars
  .toSorted((a, b) => {
    return a.model.localeCompare(b.model);
  })
  .toSorted((a, b) => {
    return a.brand.localeCompare(b.brand);
  })
  .toSorted((a, b) => {
    return a.isSportCar - b.isSportCar;
  });
console.table(result); */

/* const result = cars.toSorted((a, b) => {
  return a.price - b.price;
});
console.table(result); */
