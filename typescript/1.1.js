"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
console.log("Day 1 part 1");
var depths = (0, fs_1.readFileSync)('../inputs/1', 'utf-8').split("\n").map(function (strValue) { return Number.parseInt(strValue); });
var depthIncreases = 0;
for (var i = 1; i < depths.length; i++) {
    depths[i - 1] < depths[i] ? depthIncreases++ : "continue";
}
console.log("The answer is: ".concat(depthIncreases));
