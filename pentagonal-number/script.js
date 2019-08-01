const pentagonalNumber = (num) => {
  // So, I pentagon has 5 sides and 5 corners.
  // The first iteration is a special case, as there is no pentagonal.
  // On the second iteration, the length of a side is zero, without considering the corners.
  // every next iteration adds one to the lenght of the side. 

  let totalDots = 1;

  for (let i = 1; i < num; i++) {
    let dots = 5 + 5*(i-1);
    totalDots += dots;
  }

  return totalDots;
}

console.log(pentagonalNumber(5));