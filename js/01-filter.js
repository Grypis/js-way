/* const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45];
// const filteredNumbers = numbers.filter(el => el % 2 === 0);
// const filteredNumbers = numbers.filter(el => el > 10);
const filteredNumbers = numbers.filter((el, i) => el > i);
console.log(filteredNumbers); */

const allCars = [
  {
    make: 'Honda',
    model: 'CR-V',
    type: 'suv',
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: 'Mits',
    model: 'wwCR-V',
    type: 'svw',
    amount: 12,
    price: 21045,
    onSale: true,
  },
  {
    make: 'HMB',
    model: 'R-V',
    type: 'uv',
    amount: 8,
    price: 14045,
    onSale: false,
  },
  {
    make: 'Groun',
    model: 'SSA',
    type: 'uv',
    amount: 2,
    price: 21345,
    onSale: true,
  },
  {
    make: 'Hon',
    model: 'CRwww-V',
    type: 'suv',
    amount: 10,
    price: 25545,
    onSale: false,
  },
];
/* const filterByPrice = (cars, threshold) => {
  return cars.filter(car => car.price < threshold);
};
 */

/* const getCarsWithDiscount = cars => {
  return cars.filter(car => !car.onSale);
};
console.table(getCarsWithDiscount(allCars)); */

/* const getCarsWithType = (cars, type) => {
  return cars.filter(car => car.type === type);
};
console.table(getCarsWithType(allCars, 'uv'));
console.table(getCarsWithType(allCars, 'suv')); */

//!============================================
/* const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45];
const filteredNumbers1 = numbers.filter(el => el % 2 === 0);
const filteredNumbers2 = numbers.find(el => el % 2 === 0);
const filteredNumbers3 = numbers.every(el => el % 2 === 0);
const filteredNumbers4 = numbers.some(el => el % 2 === 0);
console.log(filteredNumbers1);
console.log(filteredNumbers2);
console.log(filteredNumbers3);
console.log(filteredNumbers4);
 */
