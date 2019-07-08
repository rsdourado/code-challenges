// Define the task and when it was completed:

const task = "Simple Symbols";
const description = "Have the function SimpleSymbols(str) take the str parameter being passed and determine if it is an acceptable sequence by either returning the string true or false. The str parameter will be composed of + and = symbols with several characters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol. So the string to the left would be false. The string will not be empty and will have at least one letter. ";
const taskUrl = "";
let dateCompleted = "2019-07-08";



// Complete the challenge inside the following funciton and return the result:

const challenge = (str) => {
  let array = str.split('');
  const allowedChars = "abcdefghijklmnopqrstuvwyxzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = true;

  for (let i = 0; i < array.length; i++) {
    const char = array[i];
    const prevChar = array[i-1];
    const nextChar = array[i+1];
    const containerChar = "+";

    if (allowedChars.includes(char)) {

      if (prevChar !== containerChar || nextChar !== containerChar || array[0] !== containerChar) {
        result = false;
      }

    }
  }

  return result;
}

const result = challenge("+d+=3=+s+a+a+");

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

