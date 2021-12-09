import { readFileSync } from 'fs';

console.log("Day 2 part 1");

const directions: (string|number)[][] = readFileSync('../inputs/2', 'utf-8').split("\n").map(s => {
  let item = s.split(" ");
  return [item[0], parseInt(item[1])];
});

// Starting positions
let verticalPos:number = 0;
let horizontalPos:number = 0;
let aim:number = 0;

// Define values in array
let axis:number = 0;
let distance:number = 1;

for (let i = 0; i < directions.length; i++) {
  let direction: string|number = directions[i][axis];
  let change: string|number = parseInt(directions[i][distance]);
  
  switch (direction) {
    case "up":
      // verticalPos -= change;
      aim -= change;
      break;
    
    case "down":
      // verticalPos += change;
      aim += change;
      break;
    
    case "forward":
      horizontalPos += change;
      verticalPos += (aim * change);
      break;
  }
}

let finalDistance:number = horizontalPos * verticalPos;

console.log(`The answer is ${finalDistance}`);