//PROMPT

/* 
Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
*/

function minMax(arr) {
  let sortArr = arr.sort((a, b) => a - b);
  let emptyArr = [];

  emptyArr.push(sortArr[0], (sortArr[sortArr.length - 1]));

  return emptyArr;
}

console.log(minMax([1, 2, 3, 4, 5]), "[1,5]")
console.log(minMax([2334454, 5]), "[5, 2334454]")
console.log(minMax([1]), "[1, 1]")