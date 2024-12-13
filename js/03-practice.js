function letMeSeeYourName(callback) {
  const userName = prompt('Enter your name');
  callback(userName);
}
function greet(name) {
  console.log(`Hi ${name}`);
}
letMeSeeYourName(greet);
