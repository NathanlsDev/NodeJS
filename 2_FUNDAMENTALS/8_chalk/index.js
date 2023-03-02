import chalk from "chalk";

const grade = 9;

if (grade >= 7){
  console.log(chalk.green("Congrats"))
} else {
  console.log(chalk.red("Reproved"))
}
