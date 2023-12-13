// 136. Single Number
/*
Given a non-empty array of integers nums, every element appears twice except for one. 
Find that single one.
You must implement a solution with a linear runtime complexity and use only constant extra space.
*/
//************ TEST CASES *************
let nums1 = [2, 2, 1]
let nums2 = [4, 1, 2, 1, 2]
let nums3 = [1]

//My Solution
var singleNumber = function (nums) {
  //sorts numbers in order, specifically when you get into double digit #s
  let sortedArr = nums.sort((a, b) => a - b);
  // console.log(sortedArr);

  for (let i = 0; i < nums.length; i++) {
    //IF numbers matchs, Splice/Remove from current sorted array
    if (sortedArr[i] === sortedArr[i + 1]) {
      sortedArr.splice(i, 2)
      //
      i--;
    }
  }
  return sortedArr;
};
console.log(singleNumber(nums1), "Expected: 1")
console.log(singleNumber(nums2), "Expected: 4")
console.log(singleNumber(nums3), "Expected: 1")

// My Solution with Set()
var singleNumber = function (nums) {
  //create empty set to add/delete items from array
  let emptySet = new Set();
  //Iterate through all the elements in the array
  for (let i = 0; i < nums.length; i++) {

    if (emptySet.has(nums[i])) {
      emptySet.delete(nums[i]);
      //if element is present in emptySet, delete element from emptySet
    } else {
      emptySet.add(nums[i]);
      //if element is not present in emptySet, add element to emptySet
    }
  }
  //Array.from() transforms emptySet into an Array
  //Need to call element at position [i] outside of (), it will throw an error
  return Array.from(emptySet)[0]
};
console.log(singleNumber(nums1), "Expected: 1")
console.log(singleNumber(nums2), "Expected: 4")
console.log(singleNumber(nums3), "Expected: 1")

//*********** COHORT SOLUTIONS**********

//Solution 1
var singleNumber = function (nums) {
  return nums.filter(el => nums.indexOf(el) == nums.lastIndexOf(el))
};
console.log(singleNumber(nums1), "Expected: 1")
console.log(singleNumber(nums2), "Expected: 4")
console.log(singleNumber(nums3), "Expected: 1")


//Solution 2
var singleNumber = function (nums) {
  const test = new Set();
  for (let i = 0; i < nums.length; i++) {
    //if number not there, add it
    //if number already there, delete it (it means it showed up twice)
    test.has(nums[i]) ? test.delete(nums[i]) : test.add(nums[i]);
  }
  return Array.from(test)[0]
};
console.log(singleNumber(nums1), "Expected: 1")
console.log(singleNumber(nums2), "Expected: 4")
console.log(singleNumber(nums3), "Expected: 1")

//Solution 3
var singleNumber = function (nums) {
  function sortNumbers(nums) {
    const result = nums.sort((a, b) => a - b);
    return result
  }
  console.log(sortNumbers(nums))

  const arr1 = sortNumbers(nums);
  for (let i = 0; i < arr1.length; i++) {
    const myNum = arr1[i];
    const left = arr1[i - 1];
    const right = arr1[i + 1];

    if (myNum != left && myNum != right) {
      return myNum;
    }
  }
};
console.log(singleNumber(nums1), "Expected: 1")
console.log(singleNumber(nums2), "Expected: 4")
console.log(singleNumber(nums3), "Expected: 1")

//Solution 4
var singleNumber = function (nums) {
  nums.sort();

  for (let i = 0; i < nums.length; i += 2) {
    if (nums[i] != nums[i + 1]) {
      return nums[i];
    }
  }
};
console.log(singleNumber(nums1), "Expected: 1")
console.log(singleNumber(nums2), "Expected: 4")
console.log(singleNumber(nums3), "Expected: 1")