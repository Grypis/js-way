/* const obj = {
  x: 10,
  y: 20,
  t: 30,
};
const copy = Object.assign(obj);
console.log(copy); */

/* Object.entries(obj);
//! - це масив масивів */

/* function myFun(userObj) {
  //   const copy = Object.assign({}, userObj);
  const copy = { ...userObj };
  for (const key of Object.keys(copy)) {
    copy[key] += 1;
  }
  return copy;
}
const obj = {
  x: 10,
  y: 20,
  t: 30,
};
const result = myFun(obj);
console.log(result);
console.log(obj); */

/* const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};
user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;
console.log(user);
for (const key of Object.keys(user)) {
  console.log(`${key} - ${user[key]}`);
} */

/* const salaries = {
  John: 100,
  Ann: 160,
  Peter: 130,
};
let total = 0;
for (const salary of Object.values(salaries)) {
  total += salary;
}
console.log(total); */
