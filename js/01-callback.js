/* function test(x) {
  x();
}
function foo() {
  console.log('Hello foo');
}
test(foo);
 */

/* function myFun() {
  console.log('Hello Fun');
}
const x = myFun;
const y = x;
const t = y;
x();
y();
t(); */

/* function myDay(callback) {
  console.log('Застели ліжко');
  console.log('Почистити зуби');
  console.log('Поснідати');
  console.log('Зібратись у школу');
  console.log('Піти до школи');
  console.log('Позайматись');
  console.log('повернутись зі школи');

  callback();

  console.log('Погуляти');
  console.log('Зробити дз');
  console.log('Спати');
}

function goToMusicSchool() {
  console.log('піти до муз школи');
  console.log('повернутися з муз школи');
}

function goToDanceSchool() {
  console.log('піти до школи танців');
  console.log('Повернутись зі школи танців');
}

myDay(goToMusicSchool);
myDay(goToDanceSchool);
 */

/* function calc(a, b, myOperation) {
  console.log(`A: ${a}, B: ${b}`);

  const result = myOperation(a, b);
  console.log(`Result: ${result}`);
}

function add(x1, x2) {
  return x1 + x2;
}

function sub(x1, x2) {
  return x1 - x2;
}

function mult(x1, x2) {
  return x1 * x2;
}

function div(x1, x2) {
  return x1 / x2;
}

calc(2, 3, add); */

function each(array, callback) {
  const result = [];
  for (const item of array) {
    const myNum = callback(item);
    result.push(myNum);
  }
  return result;
}
console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return value * 2;
  }),
);
