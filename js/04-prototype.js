/* const x = 10;
x.toString(); */

/* const objA = {
  name: 'objA',
  x: 10,
  y: 20,
};
console.log(objA);
const objB = Object.create(objA);
objB.name = 'objB';
console.log(objB.x); */

/* const animal = {
  legs: 4,
};
const dog = Object.create(animal);
dog.name = 'Mango'; */
/* console.log(dog);
console.log(dog.name);
console.log(dog.legs);
console.log(dog.hasOwnProperty('name'));
console.log(dog.hasOwnProperty('legs')); */
/* for (const key in dog) {
  console.log(key, dog.hasOwnProperty(key));

  if (dog.hasOwnProperty(key)) {
    console.log(key);
  }
} */

const dogPrototype = {
  sayWoof() {
    console.log('Woof');
  },
  eat() {
    console.log('Yummy');
  },
  sleep() {
    console.log('Zxxxxz');
  },
  sayHello() {
    console.log(this.name);
  },
};
function createDog(name) {
  const dog1 = Object.create(dogPrototype);
  dog1.name = name;
  return dog1;
}
const dog1 = createDog('Lord');
console.log(dog1);
dog1.sayHello();
