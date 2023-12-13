//PROMPT
/*
Winter is still here. 
The objective of this kata is to determine the number of pairs of gloves you can constitute from the gloves you have in your drawer.
Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.
*/

console.log(numberOfPairs(["red", "green", "red", "blue", "blue"]), "should return 2");
console.log(numberOfPairs(["red", "red", "red", "red", "red", "red"]), "should return 3");

//************** SOLUTION 1 **************
function numberOfPairs(gloves) {
  //SORTS original array
  let arr = gloves.sort();

  //Count the amount of pairs paired
  let pairs = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] === arr[i]) {
      //Pairs is adding to the count
      pairs++
      //adds 1 to i, so the next iteration it will be 2 compared to 3, essentially moving down the line to the next pair
      i++
    }
  }
  return pairs
}

//************** SOLUTION 2 **************
function numberOfPairs(gloves) {
  let arr = gloves.slice().sort((a, b) => a.localeCompare(b))

  //SLICE creates a new array/a copy
  console.log(gloves.slice());
  //SORT sorts the new array
  console.log(gloves.sort((a, b) => a.localeCompare(b)))

  //Count the amount of pairs paired
  let pairs = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] === arr[i]) {
      //Pairs is adding to the count
      pairs++
      //adds 1 to i, so the next iteration it will be 2 compared to 3, essentially moving down the line to the next pair
      i++
    }
  }
  return pairs
}

//************** SOLUTION 3 **************
function numberOfPairs(gloves) {

  let glovesObj = gloves.reduce((acc, el) => {
    // used reduce to convert the array into an object, to count the instances
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {})

  let r = 0;

  for (color in glovesObj) {
    r += Math.floor(glovesObj[color] / 2)
  }

  return r
}