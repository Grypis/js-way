const user1 = {
  name: 'Vasya',
};
const user2 = {
  name: 'Petya',
};
const user3 = {
  name: 'Kolya',
};
/* function sayhello() {
  console.log('Hello');
} */

/* const user = {
  name: 'Volodka',
  tesla() {
    console.log(this.name);
  },
};
user.tesla.call(user2); */

function showName(a, b) {
    console.log(this.name, a + b);
    
}
showName.call(user1, 10, 20);
showName.apply(user1, [10,20])