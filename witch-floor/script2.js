const challenge = () => {
  console.time('Time');

  let array = [1,2,3,4,5];

  let result = array.reduce((acc, currentNum) => {
    
    return acc;
  });

  console.timeEnd('Time');
  return result;
}

const result = challenge(); 
console.log("Result: ", result);
