import { readFileSync } from 'fs';

console.log("Day 1 part 1");

const depths = readFileSync('../inputs/1', 'utf-8').split("\n").map(strValue => Number.parseInt(strValue));

let depthIncreases = 0;

for (let i = 1; i < depths.length; i++) {
  depths[i-1] < depths[i] ? depthIncreases++ : "continue";
}

console.log(`The answer is: ${depthIncreases}`);