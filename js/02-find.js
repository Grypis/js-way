/* const numbers = [5, 10, 15, 20, 25, 30];
const number = numbers.find(num => num % 2 === 0 && num % 3 === 0);
console.log(number); */

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

/* const getCarByModel = (cars, model) => {
  return cars.find(car => {
    return car.model === model;
  });
};
console.log(getCarByModel(allCars, 'SSA')); */

/* const getCarByType = (cars, type) => {
  return cars.find(car => car.type === type);
};
console.log(getCarByType(allCars, 'suv')); */
