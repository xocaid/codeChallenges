//PROMPT
/*
Seek and Destroy
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. 
Remove all elements from the initial array that are of the same value as these arguments.
Hint: You can use arguments object
*/

//******PSEUDOCODE*******
/*
declare EMPTY array
create a loop
initialize start from index 1 until arguement.length
check to see if each item is included in arguements index 0
condition if arguements index 0 does NOT include arguments index i, then push to empty array
loop ends return final array
*/

console.log("");
console.log("Wednesday, 8/3/22 - Destroy Specified Elements");
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3), "Expected Output: [1, 1]");
console.log(destroyer([2, 3, 2, 3], 2, 3), "Expected Output: []");
console.log(destroyer(["tree", "hamburger", 53], "tree", 53), "Expected Output: ['hamburger']");
console.log(destroyer([1, 2, 3, 4, 5], 6, 7, 8, 9, 10), "Expected Output: [1, 2, 3, 4, 5]");
console.log(destroyer([], 3), "Expected Output: []");
console.log(destroyer([1, 2, 3]), "Expected Output: [1, 2, 3]");

//************** SOLUTION 1 **************
function destroyer(arr) {
  // Declare an array to hold params after the array
  let newArgs = [];
  // Declare the final array we want to return
  let finalArgs = [];
  // Loop through the extra params after array (arguments[0])
  for (let i = 1; i < arguments.length; i++) {
    // Add each param to newArgs array
    console.log(newArgs.push(arguments[i]));
  }
  // Loop through the array (which lives at arguments[0])
  for (let i = 0; i < arguments[0].length; i++) {
    // If each item in the array is not included in newArgs, add it to finalArgs
    if (!newArgs.includes(arguments[0][i])) {
      console.log(finalArgs.push(arguments[0][i]));
    }
  }
  // Return final Args
  //return finalArgs;
  return finalArgs;
}

//************** SOLUTION 2 **************
function destroyer(arr) {
  let finalArr_butnotreally = [];
  for (let i = 1; i < arguments.length; i++) {
    finalArr_butnotreally.push(arguments[i])
  }
  function find(currentValue) {
    return finalArr_butnotreally.indexOf(currentValue) === -1;
  }
  let finalArr = arr.filter(find);

  return finalArr;
}

//************** SOLUTION 3 **************
function destroyer3(arr) {
  // Destructure arguments from the arguments object into an array, adds all elements from index 1-on, assigns to arr1
  let arr1 = [...arguments].splice(1);
  // Returns the original array, filtered by item that isn't included in arr1
  return arguments[0].filter(item => !arr1.includes(item));
}

//************** SOLUTION 4 **************
function destroyer(arr) {
  // creating the array of arguments
  //console.log(arguments);
  let newArr = Object.values(arguments);
  // console.log(newArr)
  // Using the slice() method on the array of arguments, starting from the second index, 1.
  let destroyerArr = newArr.slice(1);
  console.log(destroyerArr);
  // return the filtered array, using includes() in the callback function to check if val is not in destroyerArr;
  let output = arr.filter((val) => !destroyerArr.includes(val));
  //console.log(output);
  return output;
}
//***********NOTES *************
// The filter() method creates a new array filled with elements that pass a test provided by a function.


//************** SOLUTION 5 **************
function destroyer(arr) {
  //console.log(arguments);
  let newArr = Object.values(arguments);
  //console.log(newArr)
  let destroyerArr = newArr.slice(1);
  //console.log(destroyerArr);
  let output = arr.filter((val) => !destroyerArr.includes(val));
  return output;
}

//************** SOLUTION 6 **************
function destroyer(arr, ...moreArgs) {
  // brute force way
  // array of indexes where arr contains the args
  let index = [];
  // loop through the additional arguments
  for (let i = 0; i < moreArgs.length; i++) {
    // loops through the array
    for (let j = 0; j < arr.length; j++) {
      // if the array contains the values of the args
      if (arr[j] === moreArgs[i]) {
        // add that index to the array
        index.push(j);
      }
    }
  }
  index.sort(); // sort the index
  for (let k = index.length - 1; k >= 0; k--) { // go backwards to not change the length throughout
    arr.splice(index[k], 1); // remove items at the indices
    // newArr.splice(index[k], 1);
  }
  return arr;

  // easy way
  // return arr.filter( (arrVal) => !moreArgs.includes(arrVal));
}
