/* const friends = [
  { name: 'Mango', online: false },
  { name: 'Kiwi', online: true },
  { name: 'Poly', online: false },
  { name: 'Ajax', online: false },
]; */
/* for (const friend of friends) {
  console.log(`${friend.name} - ${friend.online}`);
} */

// console.log(friends);
/* for (let i = 0; i < friends.length; i += 2) {
  console.log(`${friends[i].name} - ${friends[i].online}`);
}
 */

/* for (const friend of friends) {
  if (friend.online !== true) {
    console.log(friend);
  }
} */

/* for (const friend of friends) {
  friend.online = !friend.online;
}
console.log(friends); */

const friends = [
  { name: 'Mango', online: false, price: 100, amount: 100 },
  { name: 'Kiwi', online: true, price: 50, amount: 100 },
  { name: 'Poly', online: false, price: 20, amount: 100 },
  { name: 'Ajax', online: false, price: 70, amount: 100 },
];

/* function findFriendByName(allFriends, friendName) {
  for (const friend of allFriends) {
    for (const friend of allFriends) {
      if (friend.name === friendName) {
        return friend;
      }
    }
  }
  return null;
} */

function findFriendByPrice(arr, price, minAmount) {
  const result = [];
  for (const friend of arr) {
    if (friend.price <= price && friend.amount > minAmount) {
      result.push(friend);
    }
  }
  return result;
}
const obj = findFriendByPrice(friends, 50, 5);
console.log(obj);

// console.log(findFriendByName(friends, 'Poly'));
