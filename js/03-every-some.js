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

const isAllOnline = players.every(player => player.online);
console.log(isAllOnline);