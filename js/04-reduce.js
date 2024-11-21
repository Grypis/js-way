/* const numbers = [5, 10, 15, 20, 25];
const result = numbers.reduce((acc, el, i, arr) => {
  return acc + el;
}, 0);
console.log(result); */

/* const numbers = [5, 10, 15, 20, 25];
const filtered = numbers.reduce((acc, el, i, arr) => {
  if (el % 2 === 0) {
    acc.push(el);
  }
  return acc;
}, []);
console.log(filtered); */

/* const salary = {
  mango: 100,
  poly: 50,
  ajax: 150,
};
const totalSalary = Object.values(salary).reduce((acc, el) => acc + el, 0);
console.log(totalSalary); */

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

/* const totalTimePlayed = players.reduce((acc, el) => acc + el.timePlayer, 0);
console.log(totalTimePlayed); */

const cart = [
  {
    label: 'Apples',
    price: 100,
    quantity: 2,
  },
  {
    label: 'Bananas',
    price: 120,
    quantity: 3,
  },
  {
    label: 'Lemons',
    price: 70,
    quantity: 4,
  },
];

/* const totalAmount = cart.reduce((acc, el) => acc + el.price * el.quantity, 0);
console.log(totalAmount); */
