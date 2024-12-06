/* function foo1() {
  console.log(arguments);
  console.log(this);
}
foo1(1, 2, 3, 4);
 */

/* function foo() {
  console.log('foo -> this', this);
}
foo(); */

/* const user = {
  tag: 'Mango',
  showTag() {
    console.log('showTag -> this', this);
  },
};
user.showTag();
 */

/* const dog = {
  name: 'Lord',
  sayHello() {
    console.log(this);
  },
};
const cat = {
  name: 'Marsik',
  sayHello() {
    console.log(this);
  },
};
dog.sayHello();
cat.sayHello(); */

/* function showTag() {
  console.log(this);
}
const mango = {
  name: 'Mango',
  test: showTag,
};
mango.test(); */

/* function showName() {
  console.log(this.name);
}
const dog1 = {
  name: 'Lord1',
  test: showName,
};
const dog2 = {
  name: 'Lord2',
  test: showName,
};
const dog3 = {
  name: 'Lord3',
  test: showName,
};
const dog4 = {
  name: 'Lord4',
  test: showName,
};
dog4.test(); */

/* const poly = {
  tag: 'Poly',
  showTag() {
    console.log('showTag -> this', this);
    console.log('showTag -> this.tag', this.tag);
  },
};
poly.showTag();
const copy = poly.showTag;
copy(); */

/* function foo1(callback) {
  const user = {
    name: 'Vasya',
    test: callback,
  };
  user.test();
}
function foo2() {
  console.log(this);
}
foo1(foo2); */
