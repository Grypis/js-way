/* const x = Number('25');
console.log(x);
const y = Number('25px');
console.log(y); */

/* const x = '25px';
const y = '30.123px';
const numberX = Number.parseInt(x); //25
console.log(numberX);
const numberY = Number.parseFloat(y); //30.123
console.log(numberY);
Number.parseInt(); //ціле число
Number.parseFloat(); //плаваюче число */

/* let elementWidth = '50px';
console.log('elementWidth: ', Number.parseInt(elementWidth));
let elementHeight = '200.74px';
console.log('elementHeight: ', Number.parseFloat(elementHeight)); */

/* const userAge = prompt('Enter your age');
const result1 = Number(userAge) > 18;
const result2 = Number.parseFloat(userAge) > 18;
const result3 = +userAge > 18;
const result4 = Number.parseInt(userAge) > 18;
const result5 = userAge > 18;
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5); */
// =======================================

/* const t = 4.5;
const x = Math.round(t); //округлення до ближчого цілого числа - 5
const y = Math.ceil(t); //округлення до цілого числа в більшу сторону(нп. 4.01 > 5)
const q = Math.floor(t); //округлення до цілого числа в меншу сторону(нп. 4.9 > 4)
console.log(x);
console.log(y);
console.log(q); */

/* const value = 27.3;
console.log(Math.round(value));
console.log(Math.ceil(value));
console.log(Math.floor(value)); */

/* //!Округлити до 3 чисел після коми 15.2342323
const x = 15.2342323;
const copyX = Math.round(x * 1000) / 1000;
console.log(copyX); */

/* //! Підведення до ступіню
const x = 10 ** 2;
console.log(x);
const x1 = Math.pow(10, 2);
console.log(x1); */

/* console.log(Math.sqrt(4)); //2 - приведення до кореня квадратного(м2)

console.log(Math.abs(-10)); //10 - приведення до модулю */

/* const x = Math.round(Math.random() * 100); //рандомне число від 0 - 100
console.log(x); */

/* //! Діапазон від 500 - 1000
const min = 500;
const max = 1000;
const x = Math.round(Math.random() * (max - min) + min);
console.log(x); */
