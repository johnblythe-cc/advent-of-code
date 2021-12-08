"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
console.log("Day 2 part 1");
var directions = (0, fs_1.readFileSync)('../inputs/2', 'utf-8').split("\n").map(function (s) {
    var item = s.split(" ");
    return [item[0], parseInt(item[1])];
});
// Starting positions
var verticalPos = 0;
var horizontalPos = 0;
// Define values in array
var axis = 0;
var distance = 1;
for (var i = 0; i < directions.length; i++) {
    var direction = directions[i][axis];
    var change = directions[i][distance];
    console.log(horizontalPos);
    switch (direction) {
        case "up":
            verticalPos -= change;
            break;
        case "down":
            verticalPos += change;
            break;
        case "forward":
            horizontalPos += change;
            break;
    }
}
console.log("hor is ".concat(horizontalPos));
console.log("vert is ".concat(verticalPos));
var finalDistance = horizontalPos * verticalPos;
console.log("The answer is ".concat(finalDistance));
