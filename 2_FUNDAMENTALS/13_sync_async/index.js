const fs = require("fs");

console.log("start");

fs.writeFileSync("archive.txt", '"oi"');

fs.writeFile("archive2.txt", '"Hello', (err) => {
  setTimeout(() => {
    console.log("archive created");
  }, 1000);
});

console.log("end");
