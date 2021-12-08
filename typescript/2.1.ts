import { readFileSync } from 'fs';

console.log("Day 2 part 1");

const directions = readFileSync('../inputs/2', 'utf-8').split("\n").map(s => {
  let item = s.split(" ");
  return [item[0], parseInt(item[1])];
});

// Starting positions
let verticalPos:number = 0;
let horizontalPos:number = 0;

// Define values in array
let axis:number = 0;
let distance:number = 1;

for (let i = 0; i < directions.length; i++) {
  let direction:string = directions[i][axis];
  let change:number = directions[i][distance];

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

console.log(`hor is ${horizontalPos}`);
console.log(`vert is ${verticalPos}`);

let finalDistance:number = horizontalPos * verticalPos;

console.log(`The answer is ${finalDistance}`);