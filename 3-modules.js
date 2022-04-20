// CommonJS, every file is a module (by default)
// Modules - Encapsulated Code (only share minimum)

// const {john, peter} = require("./4-names");
const names = require("./4-names");
// console.log(names);

const sayHi = require("./5-utils");
const data = require("./6-alternative-flavor");
// console.log(data);

// Required modules execute their function calls on load...
// require("./7-mind-grenade");

// sayHi("susan");
// sayHi(john);
// sayHi(peter);
sayHi(names.john);
sayHi(names.peter);
