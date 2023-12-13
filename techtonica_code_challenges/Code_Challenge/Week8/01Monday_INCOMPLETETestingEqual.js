//PROMPT
/*
Here is a working example of a Unitest for the AddArrays function. 
Do you think you can create a Unitest for a function that takes two strings and returns those concatenations? 

You can test your solution by clicking the checkbox in the left menu, and then the plus sign to add a test and then "run tests".
*/

function concatStrings(string1, strin2) {
  // your code here
  let newConcat = string1.concat(strin2);
  return newConcat;
}

function addNumber(num1, num2) {
  return num1 + num2
}

module.exports = { concatStrings, addNumber }