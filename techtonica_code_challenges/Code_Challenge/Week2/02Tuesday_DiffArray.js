//PROMPT
/* 
Create a function called "diffArray" that takes two arrays to compare and return a new array with any items only found in one of the two given arrays, but not both. 
In other words, return the symmetric difference of the two arrays.
Note: You can return the array with its elements in any order.
*/

console.log("");
console.log("Tuesday, 8/2/22 - Find Differences Between Two Arrays");
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]), "Expected Output: [4].");
console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]), "Expected Output: ['piglet', 4]");
console.log(diffArray([], ["snuffleupagus", "cookie monster", "elmo"]), "Expected Output: ['snuffleupagu', 'cookie monster', 'elmo']");
console.log(diffArray([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]), "Expected Output: []");
console.log(diffArray([], []), "Expected Output: []");
console.log(diffArray(["ruthie", "harneet", "janice", "linda"], [1, 2, 3, 4]), "Expected Output: [1, 2, 3, 4,'ruthie', 'harneet', 'janice', 'linda']");
console.log(diffArray(["1"], [1]), "Expected Output: [1, '1']");

//********** SOLUTION 1 *******************
function diffArray(arr, arr1) {
  //store new array in variable

  let newArr = [];

  function loopMe(arr, arr2) {
    for (let i = 0; i < arr.length; i++) {
      if (!arr2.includes(arr[i])) {
        newArr.push(arr1[i]);
      }
    }
  }
  loopMe(arr, arr1);
  loopMe(arr1, arr);
  return newArr;
}

//************* SOLUTION 2 ***************
function diffArrays(arr3, arr4) {
  let newArr2 = [];
  newArr2 = arr3.concat(arr4); //combines the arrays

  function numLookUp(num) {
    if (arr3.indexOf(num) === -1 || arr4.indexOf(num) === -1) {
      return num; //returns the number not found in arr3, arr4. 
    }
  }
  return newArr2.filter(numLookUp); //filters the array returning item that is not repeated. 
}

// //************ SOLUTION 3 ************
function diffArray4(arr, arr1) {

  newArr = (arr.filter(item => arr1.indexOf(item) === -1));
  newArr1 = (arr1.filter(item => arr.indexOf(item) === -1));
  let finalArr = newArr.concat(newArr1);

  console.log('final', finalArr)
}

//********* SOLUTION 4 ******
// Using lasIndexOf
function diffArray6(arr, arr1) {
  // store new array in variable that combines both arrays
  let finalArr = [...arr, ...arr1];
  finalArr = finalArr.filter(item => {
    console.log('first index: ', finalArr.indexOf(item))
    console.log('last index: ', finalArr.lastIndexOf(item));
    return finalArr.indexOf(item) === finalArr.lastIndexOf(item);
  });
  console.log('final', finalArr)
}

//****** SOLUTION 5 **********
function diffArray(arr1, arr2) {
  // return arr1.filter(x => !arr2.includes(x)).concat(arr2.filter(x => !arr1.includes(x)));
  // array to store the differences
  let finalArray = [];
  // loop through array 2
  for (let i = 0; i < arr2.length; i++) {
    // if an item in array 2 is not in array 1
    if (arr1.indexOf(arr2[i]) === -1) {
      // push to array of differences
      finalArray.push(arr2[i]);
    }
  }
  // loop through array 1
  for (let j = 0; j < arr1.length; j++) {
    // if an item in array 1 is not in array 2
    if (arr2.indexOf(arr1[j]) === -1) {
      // push to array of differences
      finalArray.push(arr1[j]);
    }
  }
  return finalArray;
}
