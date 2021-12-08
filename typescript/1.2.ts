import { readFileSync } from 'fs';

console.log("Day 1 part 2");

const depths = readFileSync('../inputs/1', 'utf-8').split("\n").map(strValue => Number.parseInt(strValue));

let depthIncreases = 0;
let batchSize = 3;

for (let i = 1; i < depths.length - 2; i++) {
  let batchOneSum = 0;
  let batchTwoSum = 0;

  let batchOne = [i-1, i, i+1];
  let batchTwo = [i, i+1, i+2];

  for (let j = 0; j < batchSize; j++) {
    batchOneSum += depths[batchOne[j]];
    batchTwoSum += depths[batchTwo[j]];
  }
  if (batchTwoSum > batchOneSum) depthIncreases++;
}

console.log(`The answer is: ${depthIncreases}`);