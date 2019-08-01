// Define the task and when it was completed:

const task = "Maximal Square";
const description = `Have the function MaximalSquare(strArr) take the strArr parameter being passed which will be a 2D matrix of 0 and 1's, and determine the area of the largest square submatrix that contains all 1's. A square submatrix is one of equal width and height, and your program should return the area of the largest submatrix that contains only 1's. For example: if strArr is ["10100", "10111", "11111", "10010"] then this looks like the following matrix: 

1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0 

For the input above, you can see the bolded 1's create the largest square submatrix of size 2x2, so your program should return the area which is 4. You can assume the input will not be empty.`;
const taskUrl = "https://www.coderbyte.com/editor/Maximal%20Square:JavaScript";
let dateCompleted = "2019-07-11";



// Complete the challenge inside the following funciton and return the result:

const challenge = (strArr) => {
  console.time('time');
  //Ok, let's brake this problem into smaller chunks.
  //First thing, let's console.log the input so we can see it and think about it better
  // I have a hunch it will be necessary to transform each string in an array, so I have an array of arrays.

  let matrix = strArr.map(element => element.split(''));
  //console.log(matrix); // [row][colum]

  // Now what is it that makes a sqare unique?
  // A square has four equal corners, so the smallest square will have a side equal to 2 and an area of 4
  // the next one will be side of 3 and area of 9, the next side 4 area 12, and the next side n area n^2.
  // try to check if the smallest square exists, and repeat the check for incrementaly bigger squares
  // when the test fails, the size of the last square is the biggest.
  
  // now to check if the smallest square exists
  // if there is a point where its right, bottom and the one right of the bottom, are the same, we have the smallest square
  // So, let's do a double for loop to iterate trhough all the elements of the matrix

  // Now, let's figure the biggest side so we can later know how many times we will need to iterate what we achieved previously

  let biggestSide = (matrix.length >= matrix[0].length) ? matrix[0].length : matrix.length ;

  let area = 1;
  let isEqual = false;

  //console.log('biggestSide', biggestSide);

  for (let side = 2; side <= biggestSide; side++) { // for each possible square size
    //console.log('side', side);
    
    for (let i = 0; i < matrix.length; i++) { // iterates over each element of the matrix
      
      for (let j = 0; j < matrix[i].length; j++) { // iterates over each element of the matrix
        const element = matrix[i][j];

        let counter = 0; // this will count how many times the correct sibling is 1
        
        for (let y = 0; y < side; y++) { // iterates over as many rows as the current side

          for (let x = 1; x < side; x++) { // iterates over the next items in the line, until the current side
            let compare = (i+y < matrix.length) ? matrix[i+y][j+x] : "0";
            isEqual = (element === "1" && element === compare && matrix[i+y][j] === "1") ? true : false;
            counter = (isEqual) ? counter+1 : counter;
            //console.log('counter', counter);
          }
          
        }

        area = (counter === Math.pow(side, 2) - side) ? Math.pow(side, 2) : area; 
        // if the counter, or the relevant siblings are 1, it defines the area.
        
        //console.log(i,j, element, area, isEqual);
        
      }
      
    }

  }
    
  let result = area;
  console.timeEnd('time');
  return result;
}

// const result = challenge(["0111", "1111", "1111", "1111"]); // 9
// const result = challenge(["0111", "1101", "0111"]); // 1
const result = challenge(["10100", "10111", "11111", "10010"]); // 4

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

