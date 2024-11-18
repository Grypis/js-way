const allCars = [
  { make: 'Honda', model: 'CR-V', amount: 14, price: 24085 },
  { make: 'Honda', model: 'R-V', amount: 134, price: 25085 },
  { make: 'Mazda', model: 'V', amount: 124, price: 24335 },
  { make: 'Mazda', model: 'sR-V', amount: 16, price: 27785 },
  { make: 'Toyota', model: 'asCR-V', amount: 16, price: 23285 },
  { make: 'Ford', model: 'CasR-V', amount: 13, price: 24045 },
  { make: 'Toyota', model: 'CRas-V', amount: 24, price: 11085 },
];

// const result = allCars.map(car => car.model);
/* const result = allCars.map(car => `${car.make}: ${car.model}`);
console.log(result); */

/* const markup = allCars
  .map(car => `<li>${car.make} ${car.model}</li>`)
  .join('\n');
console.log(markup); */

/* const getModels = car => car.map(car => car.model);
console.table(getModels(allCars)); */

/* const makeCarsWithDiscount = (cars, discount) => {
  return cars.map(car => {
    const copy = { ...car };
    copy.price *= 1 - discount;
    return copy;
  });
};
console.table(makeCarsWithDiscount(allCars, 0.2));
console.table(makeCarsWithDiscount(allCars, 0.4)); */
