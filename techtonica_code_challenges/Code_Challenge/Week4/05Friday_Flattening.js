//PROMPT
/*
Create a function to “flatten” an array of arrays into a single array that has all the elements of the original arrays.
*/

let arrays = [
  [1, 2],
  [3, 4],
  [5, 6, 7]];
//EXPECTED: [1,2,3,4,5,6,7]

let nested = [
  [1, 2],
  [3, [4, 5]],
  [6],
  7];
//EXPECTED:[1,2,3,4,5,6,7]

//************** SOLUTION: FLATTEN **************
// flatMap only flattens on ONE LEVEL, doesn't work with edge case
function flattenWithFlatMap(arr) {

  let map1 = arr.flatMap(element => element);
  return map1;
}
console.log(flattenWithFlatMap(arrays), "should return [1,2,3,4,5,6,7]");
console.log(flattenWithFlatMap(nested), "should return [1,2,3,4,5,6,7]");//FAILS WITH EDGE CASE

//************** SOLUTION: FLAT **************
// //.flat(x) flattens MULTIPLE LEVELS
// //x means the levels to flatten, if empty it will automatically flatten 1 level
function flattenWithFlat(arr) {
  let flat1 = arr.flat(2);
  return flat1;
}
console.log(flattenWithFlat(arrays), "should return [1,2,3,4,5,6,7]");
console.log(flattenWithFlat(nested), "should return [1,2,3,4,5,6,7]");