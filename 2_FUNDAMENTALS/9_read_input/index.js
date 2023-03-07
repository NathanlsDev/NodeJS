const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,  
})

readline.question("Who are you? ", (arg) => {
  console.log(`Hello ${arg}`)
  readline.close()
})