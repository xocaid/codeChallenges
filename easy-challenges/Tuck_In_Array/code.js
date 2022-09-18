//PROMPT
/* Create a function that takes two arrays and insert the second array in the middle of the first array.
*/

function tuckIn(arr1, arr2) {
  let extra = arr1.slice(1, 0, arr2)
  //slicing  the 1st element of arr1
  let beginArr = arr1.slice(0, 1)
  //slicing the last element of arr1
  let endArr = arr1.slice(-1)
  //concatenate 1st element of arr1 + arr2 + last element of arr1;
  let joinedArr = beginArr.concat(arr2, endArr);

  //return joinedArr;
  return extra;
}

console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]), "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]")
console.log(tuckIn([15,150], [45, 75, 35]),"[15, 45, 75, 35, 150]")
console.log(tuckIn([[1, 2], [5, 6]], [[3, 4]]),"[[1, 2], [3, 4], [5, 6]]") 
