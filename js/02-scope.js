const globalValue = 10;
console.log(globalValue); // 10
function foo() {
  const a = 20;
  console.log(a); // 20
  console.log(globalValue); // 10

  for (let i = 0; i < 5; i++) {
    console.log(a); // 20
    console.log(globalValue); // 10

    if (i === 2) {
      console.log(a); // a
      console.log(globalValue);
    }
  }
}

console.log(a); //  недоступна змінна

for (let i = 0; i < 3; i++) {
  console.log(a); // недоступна змінна
}
