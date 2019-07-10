// Define the task and when it was completed:

const task = "Kaprekars Constant";
const description = "Determine when a specific sequence terminates";
const taskUrl = "";
let dateCompleted = "2019-07-10";



// Complete the challenge inside the following funciton and return the result:

const challenge = (num) => {

  if (num.toString().length !== 4) {
    return "Error: number must have four digits";
  }

  let i = 0;
  
  do {
    
    i++;

    if (num.toString().length < 4) {
      num = num.toString().split('');
      num.unshift("0");
    } else if (num.toString().length < 3) {
      num = num.toString().split('');
      num.unshift("0", "0");
    } else if (num.toString().length < 2) {
      num = num.toString().split('');
      num.unshift("0", "0", "0");
    } else {
      num = num.toString().split('');
    }

    let desc = Number(num.sort().reverse().join(''));
    let asc = Number(num.sort().join(''));

    num = desc - asc;

    // console.log('i', i);
    // console.log('desc', desc);
    // console.log('asc', asc);
    // console.log('num', num);

  } while (num !== 6174 && i < 9);

  return i;
}

const result = challenge(2834);

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

