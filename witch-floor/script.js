// Ok, so from now on I don't think I will be using the template anymore for code challenges.
// Why? Because I learned to use node.js and nodemon, and it seems to me that it is much easier to do it all in here.
// So let's get started. This next challenge comes from: https://adventofcode.com/2015/day/1

// Santa is trying to deliver presents in a large apartment building, but he can't find the right floor - the directions he got are a little confusing. He starts on the ground floor (floor 0) and then follows the instructions one character at a time.

// An opening parenthesis, (, means he should go up one floor, and a closing parenthesis, ), means he should go down one floor.

// The apartment building is very tall, and the basement is very deep; he will never find the top or bottom floors.

// For example:

// (()) and ()() both result in floor 0.
// ((( and (()(()( both result in floor 3.
// ))((((( also results in floor 3.
// ()) and ))( both result in floor -1 (the first basement level).
// ))) and )())()) both result in floor -3.
// To what floor do the instructions take Santa?

const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString();

const challenge1 = (str) => {
  console.time('Time');

  let countUp = 0
  let countDown = 0;

  let array = str.split('');
  
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
    if (element === "(") {
      countUp++;
    } else if (element === ")") {
      countDown++;
    }

  }

  let result = countUp - countDown;

  console.timeEnd('Time');
  return result;
}

const challenge2 = (str) => {
  console.time('Time');

  let countUp = 0
  let countDown = 0;
  let result;
  let index;

  const array = str.split('');
  
  for (index = 0; index < array.length; index++) {
    const element = array[index];
    
    if (element === "(") {
      countUp++;
    } else if (element === ")") {
      countDown++;
    }
    
    result = countUp - countDown;

    if (result === -1) {
      break;
    }

  }

  const pos = index + 1;

  console.timeEnd('Time');
  return pos;
}

// const result = challenge1(input); 
const result1 = challenge1(input); 
console.log("Result 1: ", result1);
const result2 = challenge2(input); 
console.log("Result 2: ", result2);