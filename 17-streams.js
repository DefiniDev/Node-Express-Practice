const { createReadStream, readFileSync } = require("fs");
const http = require("http");

// const stream = createReadStream("../content/big.txt", {
//   highWaterMark: 90000,
//   encoding: "utf8",
// });

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream("./content/big.txt", {highWaterMark: 90000})
// const stream = createReadStream("./content/big.txt", {encoding: "utf8"})

// stream.on(
//   "data",
//   result => {
//     console.log(result);
//   },
//   "utf8"
// );

// stream.on("error", err => {
//   console.log(err);
// });

http
  .createServer((req, res) => {
    // const text = readFileSync("./content/big.txt", "utf8");
    // res.end(text);
    const fileStream = createReadStream("./content/big.txt", "utf8");
    fileStream.on("open", () => {
      fileStream.pipe(res);
    });
    fileStream.on("error", err => {
      res.end(err);
    });
  })
  .listen(5000);
