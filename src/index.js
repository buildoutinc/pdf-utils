"use strict";
exports.__esModule = true;
var minimist_1 = require("minimist");
var argv = minimist_1["default"](process.argv.slice(2));
var Greeter = function (name) { return "Hello " + name; };
console.log(Greeter(argv._[0]));
