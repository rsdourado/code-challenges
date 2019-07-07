// Define the task and when it was completed:

const task = "Letter Change";
const description = "Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string. ";
const taskUrl = "https://www.coderbyte.com/editor/Letter%20Changes:JavaScript";
let dateCompleted = "2019-07-07";



// Complete the challenge inside the following funciton and return the result:

const challenge = (str) => {

  let array = str.split('');

  let map = array.map(char => {

    let charCode = char.charCodeAt(0);
    // console.log(char, charCode);

    if (charCode >= 65 && charCode < 90 || charCode >= 97 && charCode < 122) {
    charCode++;
    } else if (charCode === 90 || charCode === 122) {
      charCode = 65;
    } 

    if (charCode === 97 || charCode === 101 || charCode === 105 || charCode === 111 || charCode === 117) {
      charCode -= 32;
    }

    let newChar = String.fromCharCode(charCode);
    return newChar;
  });

  let result = map.join('');

  return result;
}

const result = challenge("Zagreb!"); // sbgbfm

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

