// PROMPT
/*
We'll pass you an array of two numbers. 
Return the sum of those two numbers plus the sum of all the numbers between them. 
The lowest number will not always come first.
For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
*/

/*
Edge Cases
If there are more/less expected items in input array
If the types of any/all elements are not expected types (such as strings, or falsy elements)
*/

console.log(sumAll([1, 4]), "Expected Output: 10.");
console.log(sumAll([4, 1]), "Expected Output: 10.");
console.log(sumAll([5, 10]), "Expected Output: 45.");
console.log(sumAll([10, 5]), "Expected Output: 45.");
console.log(sumAll([5, 0]), "Expected Output: 15."); // one of the num is 0
console.log(sumAll([5, 5]), "Expected Output: 10."); // same number
console.log(sumAll([-2, 5]), "Expected Output: 12."); // negative
console.log(sumAll([-2, -5]), "Expected Output: -14."); // both negative

//************** SOLUTION 1 **************
function sumAll(arr1) {
  //if (typeof arr1[0] !== "number" )
  let bigNum = Math.max(...arr1); //(... is a spread operator)
  let smallNum = Math.min(...arr1);

  let sum = 0;
  while (smallNum <= bigNum) {
    sum += smallNum;
    smallNum++;
  }
  return sum;
}

//********* SOLUTION 2*******
function sumAll(arr) {
  // sort the array based off of the min and max of the two numbers
  const sorted = [(Math.min(arr[0], arr[1])), Math.max(arr[0], arr[1])];
  // store the sum
  let sum = 0;
  // have min as the starting value and max as the end; inclusive
  for (let i = sorted[0]; i <= sorted[1]; i++) {
    // add to the sum
    sum += i;
  }
  return sum;
}

//********NOTES: SOLUTION 1 *****************
// store in a variable both min and max
// declare a sum that starts at 0 
// use a for loop where i starts at min and ends at the max
// increments sum by i
// end of for loop return sum
// add min and max together