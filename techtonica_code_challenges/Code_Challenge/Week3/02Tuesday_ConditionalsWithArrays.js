// PROMPT
/*
Given an array of ints, return True if the array contains a 2 next to a 2 somewhere.
*/

console.log(has22([1, 2, 2]), "Expect: true")
console.log(has22([1, 2, 1, 2]), "Expect: false")
console.log(has22([2, 1, 2]), "Expect: false")

//**************SOLUTION 1**************
function has22(arr) {
  return arr.some(function (check2) {
    return;
  })
}

//**************SOLUTION 2**************
function has22(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i - 1] === 2 && arr[i] === 2) {
      // console.log(arr[i - 1], arr[i]);
      return true;
    }
    // console.log(arr[i - 1], arr[i]);
  }
  return false;
}

//**************SOLUTION 3**************
function has22(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 2 && arr[i + 1] === 2) {
      return true;
    }
  }
  return false;
}

//**************SOLUTION 4**************
function has22(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 2 && arr[i + 1] === 2) {
      return true
    }
  }
  return false
}