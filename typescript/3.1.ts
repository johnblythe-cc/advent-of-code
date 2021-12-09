import { DH_CHECK_P_NOT_SAFE_PRIME } from 'constants';
import { readFileSync } from 'fs';

console.log("Day 3 part 1");

const directions: (string|number)[] = readFileSync('../inputs/3', 'utf-8').split("\n").map(s => {
  return s;
});

let allCounts = [];
for (let i: number = 0; i < directions[0].length; i++) {
  let counterObj = {
    0: 0,
    1: 0
  };

  allCounts.push([counterObj]);
}

for (let i = 0; i < directions.length; i++) {
  for (let j = 0; j < directions[i].length; j++) {
    let idx = 0;
    if (parseInt(directions[i][j]) > 0) {
      idx = 1;
    }
    allCounts[j][0][idx]++;
  }
}

console.log(allCounts);

// See what the winner is
let gammaArr = allCounts.map(obj => {
  obj = obj.shift();
  return Number(obj[1] > obj[0]);
});

// Reverse the gamma
let epsilonArr = gammaArr.map(item => {
  return Number(!item);
})

let gamma = parseInt(gammaArr.join(""), 2);
let epsilon = parseInt(epsilonArr.join(""), 2);

let powerConsumption: number = epsilon * gamma;

console.log(`The answer is ${powerConsumption}`);