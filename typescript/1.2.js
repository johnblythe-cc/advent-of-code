"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
console.log("Day 1 part 2");
var depths = (0, fs_1.readFileSync)('../inputs/1', 'utf-8').split("\n").map(function (strValue) { return Number.parseInt(strValue); });
var depthIncreases = 0;
var batchSize = 3;
for (var i = 1; i < depths.length - 2; i++) {
    var batchOneSum = 0;
    var batchTwoSum = 0;
    var batchOne = [i - 1, i, i + 1];
    var batchTwo = [i, i + 1, i + 2];
    for (var j = 0; j < batchSize; j++) {
        batchOneSum += depths[batchOne[j]];
        batchTwoSum += depths[batchTwo[j]];
    }
    if (batchTwoSum > batchOneSum)
        depthIncreases++;
}
console.log("The answer is: ".concat(depthIncreases));
