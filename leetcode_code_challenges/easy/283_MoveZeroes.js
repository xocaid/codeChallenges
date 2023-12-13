//283. Move Zeroes
/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.
*/
//************ TEST CASES *************
let nums1 = [0, 1, 0, 3, 12]
let nums2 = [0]
let nums3 = [0, 0, 1]
let nums4 = [0, 1, 0]

var moveZeroes = function (nums) {
  //create an empty array to store the 0 values
  let emptyArr = [];
  for (let i = 0; i < nums.length; i++) {
    //if element at position [i] strictly equals 0 THEN 
    if (nums[i] === 0) {
      //Syntax: Splice(start, deleteCount)
      //SPLICE(removes) element at position i from nums array and stores it in  the empty array 
      emptyArr = nums.splice(i, 1);
      //Adds stored zeroes in emptyArr to the end of nums array
      nums.push(emptyArr);
      //Necessary for 0s next to each other
      i--;
    }
  }
  return nums.flat();
};

console.log(moveZeroes(nums1), "Expected: [1,3,12,0,0]");
console.log(moveZeroes(nums2), "Expected: [0]");
console.log(moveZeroes(nums3), "Expected: [1,0,0]");
console.log(moveZeroes(nums4), "Expected: [1,0,0]");

/*
Constraints:
1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
*/