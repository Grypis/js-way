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

/* const isAllOnline = players.every(player => player.online);
console.log(isAllOnline); */

/* const arr = [1, 2, 3, 4, 5, 6, 12, 3, 12, 3, 4, 1, 1, 3, 4];
while (!arr.every(el => el === 0)) {
  console.log(arr.join(' '));

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      arr[i] -= 1;
    }
  }
}
console.log(arr); */

/* const isAnyOnline = players.some(el => el.online);
console.log('isAnyOnline: ', isAnyOnline); */
