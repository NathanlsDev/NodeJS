const fs = require('fs') // file System

fs.readFile('lorem.txt', 'utf8', (err, data) => {
  if (err){
    return console.log(err)
  }
  console.log(data)
})