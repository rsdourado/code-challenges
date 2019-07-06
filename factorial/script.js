// Define the task and when it was completed:

const task = "Return the factorial";
const description = "Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it. For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24. For the test cases, the range will be between 1 and 18 and the input will always be an integer. ";
const taskUrl = "https://www.coderbyte.com/editor/First%20Factorial:JavaScript"
let dateCompleted = "2019-07-06";



// Complete the challenge inside the following funciton and return the result:

const challenge = (num) => {

  // get a number, subtract 1, multiply, repeat until the number is 1
  let result;
  if (num === 0 || num === 1) {
    result = 1; // mathematical convention
  } else {
    let nextNum = num-1;
    result = num*nextNum; 
  
    for (let index = 0; index < num; index++) {
      
      nextNum = num - index - 2;
      nextNum > 0 ? result = result * nextNum : result = result;
 
      if (nextNum === 1) {
        break;
      }
  
    }
  }

  return result;
}

// below is the best solution from coderbyte:

const best = (num) => {
  let factorial = 1; 
    
  for (let i = 1; i <= num; i++) {
      factorial *= i;  
  } 


return factorial; 
}

const result = challenge(4);
//const result = best(8);

// Displays the result, task and when it was completed:

const displayElements = () => {
  const resultContainer = document.getElementById("result-text");
  const resultNode = document.createTextNode(result);
  resultContainer.appendChild(resultNode);

  const taskContainer = document.getElementById("task");
  const taskNode = document.createTextNode(`=> ${task}`);
  taskContainer.appendChild(taskNode);

  dateCompleted = new Date(dateCompleted);
  const options = { day: 'numeric', month: 'long', year: 'numeric' }
  dateCompleted = dateCompleted.toLocaleDateString('en-GB', options);
  const dateContainer = document.getElementById("date-completed");
  const dateNode = document.createTextNode(`=> ${dateCompleted}`);
  dateContainer.appendChild(dateNode);  
}
displayElements();

