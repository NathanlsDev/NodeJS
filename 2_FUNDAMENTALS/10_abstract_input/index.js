const inquirer = require('inquirer')

inquirer
  .prompt([
    {  
      name: 'p1',
      message: "what's the first grade? ",  
    },
    {
      name: 'p2',
      message: "What's the second grade? ",
    },
  ])
  .then((answers) => {
    console.log(answers)
  })
  .catch((err) => console.log(err))