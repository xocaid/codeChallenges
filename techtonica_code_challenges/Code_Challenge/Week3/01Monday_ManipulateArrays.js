// PROMPT
/*
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
*/

/*
Edge Cases
Instead of using a boring old for loop, look up a better way to filter elements of an a array.
*/

//************** SOLUTION 1 **************
function chunkArrayInGroups(arr1, n) {
  let newArr = [];

  while (arr1.length > 0) {
    let chunk = arr1.splice(0, n);
    newArr.push(chunk);
  }
  return newArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2), 'Expected[["a", "b"], ["c", "d"]]');
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4), 'Expected[[0, 1, 2, 3], [4, 5, 6, 7], [8]]');
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4), 'Expected[[0, 1, 2, 3], [4, 5]]');


//********* SOLUTION 2 *******
function chunkArrayInGroups(arr1, n) {
  let newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    newArr.push(arr1.splice(0, n));
  }

  return newArr;
}
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2), 'Expected[["a", "b"], ["c", "d"]]');
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4), 'Expected[[0, 1, 2, 3], [4, 5, 6, 7], [8]]');
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4), 'Expected[[0, 1, 2, 3], [4, 5]]');


//********* SOLUTION 3 *******
function chunkArrayInGroups(arr1, n) {
  let newArr = [];

  while (arr1.length > 0) {
    let chunk = arr1.splice(0, n);
    newArr.push(chunk);
  }
  return newArr;
}
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2), 'Expected[["a", "b"], ["c", "d"]]');
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4), 'Expected[[0, 1, 2, 3], [4, 5, 6, 7], [8]]');
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4), 'Expected[[0, 1, 2, 3], [4, 5]]');
