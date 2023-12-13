//PROMPT
/*
Given an array of ints length 3, figure out which is larger, the first or last element in the array, and set all the other elements to be that value. 
Return the changed array.
*/

console.log(max_end3([1, 2, 3]), "EXPECT: [3, 3, 3]")
console.log(max_end3([11, 5, 9]), "EXPECT: [11, 11, 11]")
console.log(max_end3([2, 11, 3]), "EXPECT: [3, 3, 3]")

//************** SOLUTION 1 **************
function max_end3(int_array) {
  // Add functionality here! 
  if (int_array[0] >= int_array[int_array.length - 1]) {
    int_array[0] = int_array[0];
    int_array[1] = int_array[0];
    int_array[2] = int_array[0];

  } else if (int_array[0] <= int_array[int_array.length - 1]) {
    int_array[0] = int_array[int_array.length - 1];
    int_array[1] = int_array[int_array.length - 1];
    int_array[2] = int_array[int_array.length - 1];
  }
  return int_array;
}

//************** SOLUTION 2 **************
function max_end3(int_array) {
  let arr1 = int_array[0]
  let arr3 = int_array[2]
  //create a new var
  let highNum = 0;// can cahnge it to 0 or null because it will always be a number
  if (arr1 > arr3) {
    highNum = arr1;
  } else {
    highNum = arr3;
  }
  return [highNum, highNum, highNum];
}

//********* NOTES ********* 
/*
forEach() - loops through and each through it calls it element
const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));
expected output: "a"
expected output: "b"
expected output: "c"

const array1 = ['a', 'b', 'c'];// are also elements a,b,c....
the term could be called element/john/etc is just the reference to the item/value/element in the array(ex: array1)
*/