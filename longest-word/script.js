// Define the task and when it was completed:

const task = "Longest Word";
const description = "Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. ";
const taskUrl = "";
let dateCompleted = "2019-07-08";



// Complete the challenge inside the following funciton and return the result:

const challenge = (sen) => {

  const allowedChars = "1234567890abcdefghijklmnopqrstuvwyxzABCDEFGHIJKLMNOPQRSTUVWXYZ ";
  let array = sen
    .split('')
    .filter(char => allowedChars.includes(char))
    .join('')
    .split(' ');
  const firstWord = array[0];
  const secondWord = array[1] ? array[1] : "";

  let longestWord = (firstWord.length >= secondWord.length) ? firstWord : secondWord;

  for (let i = 2; i < array.length; i++) {
    const word = array[i];
    longestWord = (word.length > longestWord.length) ? word : longestWord;  
  }

  return longestWord;
}

const result = challenge("This is a super long array with some numbers 99999");

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

