const x = 10;
const y = "something";
const z = ["a", "b", "c"];

console.log(x, y, z);

console.count(`The value of X is: ${x}, count`);
console.count(`The value of X is: ${x}, count`);
console.count(`The value of X is: ${x}, count`);
console.count(`The value of X is: ${x}, count`);
console.count(`The value of X is: ${x}, count`);

// variable among string
console.log("This is %s there", y);

// clear console
setTimeout(() => {
  console.clear()
}, 2000)
