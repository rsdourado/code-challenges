// Define the task and when it was completed:

const task = "Chessboard Traveling";
const description = 'Have the function ChessboardTraveling(str) read str which will be a string consisting of the location of a space on a standard 8x8 chess board with no pieces on the board along with another space on the chess board. The structure of str will be the following: "(x y)(a b)" where (x y) represents the position you are currently on with x and y ranging from 1 to 8 and (a b) represents some other space on the chess board with a and b also ranging from 1 to 8 where a > x and b > y. Your program should determine how many ways there are of traveling from (x y) on the board to (a b) moving only up and to the right. For example: if str is (1 1)(2 2) then your program should output 2 because there are only two possible ways to travel from space (1 1) on a chessboard to space (2 2) while making only moves up and to the right.';
const taskUrl = "https://www.coderbyte.com/editor/Chessboard%20Traveling:JavaScript";
let dateCompleted = "2019-07-11";



// Complete the challenge inside the following funciton and return the result:

const challenge = (str) => {
  let begin = [Number(str.charAt(1)), Number(str.charAt(3))];
  let end = [Number(str.charAt(6)), Number(str.charAt(8))];
  let counter = 0;

  // the number of moves will be 

  rightMoves = end[0]-begin[0];
  upMoves = end[1]-begin[1];
  totalMoves = rightMoves + upMoves;

  totalPossibilities = Math.pow(2, totalMoves);

  //console.log("total, right, up", totalMoves, upMoves, rightMoves);

  // This problem can be thought as:
  // given a binary sequence of x digits, where x is totalMoves
  // assuming upMove is 1 and right move is 0
  // How many combinatios are possible with as many 1s as there are upMoves
  // and as many 0s as there are rightMoves.
  // the total number of combinatios a binary string can have is 2^d, where d is the number of digits
  // Now, from all those combinations how do I get the ones that have a specific number of 0s and 1s?

  for (let i = 0; i < totalPossibilities; i++) {

    let binaries = i.toString(2);

    // then add as many zeros to the beginning as necessary until the length is equal to  totalPossibilities
    if (binaries.length < totalMoves) {
      let howSmaller = totalMoves - binaries.length;
      for (let i = 0; i < howSmaller; i++) {
        binaries = '0' + binaries;
      }
    }

    binaries = binaries.split('');
    
    // counts the number of zeros, or right moves:
    let zeros = 0;
    binaries.forEach(element => {
      if (element === "0") {
        zeros++;
      }
    });

    // counts the number of ones, or left moves:
    let ones = 0;
    binaries.forEach(element => {
      if (element === "1") {
        ones++;
      }
    });

    //console.log("binaries, zeros, ones", binaries, zeros, ones);

    // counts how many of the possibilies will reach the correct destionation in the board
    if (zeros === rightMoves && ones === upMoves) {
      counter++;
    }
  }

  //console.log('counter', counter);

  return counter;
}

const result = challenge("(2 2)(4 3)");

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

