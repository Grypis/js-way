function foo1() {
  console.log('start1');
  foo2();
  console.log('end1');
}

function foo2() {
  console.log('start2');
  foo3();
  console.log('end2');
}

function foo3() {
  console.log('start3');
  console.log('end3');
}

foo1();
