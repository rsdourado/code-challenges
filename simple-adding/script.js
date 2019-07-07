// Define the task and when it was completed:

const task = "Simple Adding";
const description = "adding up all the numbers from 1 to a certain argument.";
const taskUrl = "";
let dateCompleted = "2019-07-07";



// Complete the challenge inside the following funciton and return the result:

const challenge = (num) => {
  
  let result = num;
  let add = num-1;
  
  for (let i = 1; i < num; i++) {
    result = result + add; 
    add--;
  }
  
  return result;
}

const result = challenge(140);

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

