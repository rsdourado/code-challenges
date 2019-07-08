// Define the task and when it was completed:

const task = "Letter Capitalize";
const description = "Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space.";
const taskUrl = "";
let dateCompleted = "2019-07-08";



// Complete the challenge inside the following funciton and return the result:

const challenge = (str) => {
  let array = str.split('');
  array[0] = array[0].toUpperCase();

  for (let i = 0; i < array.length; i++) {
    const char = array[i];
    const prevChar = array[i-1];
    if (prevChar === " ") {
      array[i] = char.toUpperCase();
    }
  }

  let result = array.join('');

  return result;
}

const result = challenge("i ran there");

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

