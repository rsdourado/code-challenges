// Define the task and when it was completed:

const task = "Reverse string";
const description = 'Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH. ';
const taskUrl = "https://www.coderbyte.com/editor/First%20Reverse:JavaScript";
let dateCompleted = "2019-07-06";



// Complete the challenge inside the following funciton and return the result:

const challenge = (string) => {

  let reverseString = [];

  for (let index = 0; index < string.length; index++) {
    const element = string[index];
    reverseString.unshift(element);
  }

  return reverseString.join('');

}

// best solution from coderbyte:

function FirstReverse(str) { 

  let newString = '';
  for (let i = str.length-1; i >= 0; i--) {
      newString += str[i];
  }

  return newString;
}

const result = challenge("hello world!");

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

