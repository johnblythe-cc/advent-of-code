"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
console.log("Day 3 part 1");
var directions = (0, fs_1.readFileSync)('../inputs/3', 'utf-8').split("\n").map(function (s) {
    return s;
});
var allCounts = [];
for (var i = 0; i < directions[0].length; i++) {
    var counterObj = {
        0: 0,
        1: 0
    };
    allCounts.push([counterObj]);
}
for (var i = 0; i < directions.length; i++) {
    for (var j = 0; j < directions[i].length; j++) {
        var idx = 0;
        if (parseInt(directions[i][j]) > 0) {
            idx = 1;
        }
        allCounts[j][0][idx]++;
    }
}
console.log(allCounts);
// See what the winner is
var gammaArr = allCounts.map(function (obj) {
    obj = obj.shift();
    return Number(obj[1] > obj[0]);
});
// Reverse the gamma
var epsilonArr = gammaArr.map(function (item) {
    return Number(!item);
});
var gamma = parseInt(gammaArr.join(""), 2);
var epsilon = parseInt(epsilonArr.join(""), 2);
var powerConsumption = epsilon * gamma;
console.log("The answer is ".concat(powerConsumption));
