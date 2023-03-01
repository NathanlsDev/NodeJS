//nome
console.log(process.argv);

// const args = process.argv.forEach((arg, index) => {
//   console.log(arg, `index ${index}`)
// })

//need do a command 'node index.js name=yourName age=yourAge, to run correctly'
const arg = process.argv.slice(2);
const name = arg[0].split("=")[1]; 
const age = arg[1].split("=")[1]; 
console.log(`Your name is ${name}, and you is ${age} years old`);
