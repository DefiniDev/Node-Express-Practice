// npm - global command, comes with Node
// npm --version

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (Mac)

// package.json - manifest file (stores important info about project/package)
// npm init (step-by-step, press Enter to skip)
// npm init -y (everything default)

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);

console.log(newItems);
