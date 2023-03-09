const x = "10";

if(!Number.isInteger(x)){
  throw new Error("The value of 'x' isn't an integer!")
}

console.log("running code")