// Define the task and when it was completed:

const task = "Check Nums";
const description = "Compare two number and determine witch one is greater.";
const taskUrl = "";
let dateCompleted = "2019-07-10";



// Complete the challenge inside the following funciton and return the result:

const challenge = (num1, num2) => {
  
  let result = (num1 > num2) ? true : false;
  result = (num1 === num2) ? -1 : result;

  return result;
}

const result = challenge(10,9);

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

