const { readFile, writeFile } = require("fs");

console.log("START");
readFile("./content/first.txt", "utf8", (err, res) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = res;
  readFile("./content/second.txt", "utf8", (err, res) => {
    if (err) {
      console.log(err);
    }
    const second = res;
    writeFile(
      "./content/result-async.txt",
      `Here is the result : ${first}, ${second}`,
      (err, res) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("DONE WITH THIS TASK");
      }
    );
  });
});
console.log("STARTING NEXT TASK");
