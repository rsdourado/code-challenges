// Define the task and when it was completed:

const task = "Example Task";
let dateCompleted = "2019-07-06";



// Complete the challenge inside the following funciton and return the result:

const challenge = () => {
  let result = "Some Result";
  return result;
}



// Displays the result, task and when it was completed:

const displayElements = () => {
  const resultContainer = document.getElementById("result-text");
  const resultNode = document.createTextNode(challenge());
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

