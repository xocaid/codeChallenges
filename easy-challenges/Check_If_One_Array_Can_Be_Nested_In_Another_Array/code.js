//PROMPT
/*
 Create a function that returns true if the first array can be nested inside the second.
arr1 can be nested inside arr2 if:
arr1's min is greater than arr2's min.
arr1's max is less than arr2's max.*/

//**********INITIAL WORK************8
function canNest(arr1, arr2) {
  let arr1min = arr1[0];
  let arr1max = arr1[arr1.length - 1];
  let arr2min = arr2[0];
  let arr2max = arr2[arr2.length - 1]

  if (arr1min > arr2min && arr1max < arr2max) {
    return true;
  }
  return false;
}

//************** SOLUTION 1 *****************
function canNest(arr1, arr2) {
  let arr1Min = Math.min(...arr1);
  let arr1Max = Math.max(...arr1);

  let arr2Min = Math.min(...arr2);
  let arr2Max = Math.max(...arr2);

  if (arr1Min > arr2Min && arr1Max < arr2Max) {
    return true;
  } return false;
}

console.log(canNest([1, 2, 3, 4], [0, 6]), "should return true")
console.log(canNest([3, 1], [4, 0]), "should return true")
console.log(canNest([9, 9, 8], [8, 9]), "should return false")
console.log(canNest([1, 2, 3, 4], [2, 3]), "should return false")

//************** SOLUTION 2 *****************
function canNest(arr1, arr2) {
  let arr1Min = Math.min(...arr1);
  let arr1Max = Math.max(...arr1);

  let arr2Min = Math.min(...arr2);
  let arr2Max = Math.max(...arr2);

  return arr1Min > arr2Min && arr1Max < arr2Max
}

console.log(canNest([1, 2, 3, 4], [0, 6]), "should return true")
console.log(canNest([3, 1], [4, 0]), "should return true")
console.log(canNest([9, 9, 8], [8, 9]), "should return false")
console.log(canNest([1, 2, 3, 4], [2, 3]), "should return false")

//************** SOLUTION 3 *****************
function canNest(arr1, arr2) {
  return Math.min(...arr1) > Math.min(...arr2) && Math.max(...arr1) < Math.max(...arr2)
}

console.log(canNest([1, 2, 3, 4], [0, 6]), "should return true")
console.log(canNest([3, 1], [4, 0]), "should return true")
console.log(canNest([9, 9, 8], [8, 9]), "should return false")
console.log(canNest([1, 2, 3, 4], [2, 3]), "should return false")


//*********** NOTES*************
//Solution 1 works because Math.min & Math.max will go through array and find the min & max
//Solution 3 is a simplified version and RETURN activates boolean, if true will return true; otherwise will return false