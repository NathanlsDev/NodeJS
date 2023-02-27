//nome
console.log(process.argv)

// const args = process.argv.forEach((arg, index) => {
//   console.log(arg, `index ${index}`)
// })

const arg = process.argv.slice(2)
const name = arg[0].split('=')[1]
const age = arg[1].split('=')[1]
console.log(name, age)
