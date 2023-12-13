// PROMPT
/*
Your task is to create a function called addArrays, which takes two arrays consisting of integers, and returns the sum of those two arrays.
The twist is that (for this problem) [3,2,9] does not equal 3 + 2 + 9, it would equal '3' + '2' + '9' converted to an integer, meaning it would equal 329. 
The output should be an array of the sum in a similar fashion to the input (for example, if the sum is 341, you would return [3,4,1]). 
Examples are given below of what two arrays should return.
In some cases, there will be an array containing a negative number as the first index in the array. In this case treat the whole number as a negative number. 
See below:
[3,2,6,6],[-7,2,2,8] --> [-3,9,6,2] # 3266 + (-7228) = -3962
*/

// [3,2,9],[1,2] --> [3,4,1] # 329 + 12 = 341
// [4,7,3],[1,2,3] --> [5,9,6] # 473 + 123 = 596
// [1],[5,7,6] --> [5,7,7] # 1 + 576 = 596
// If both arrays are empty, return an empty array.

//PSEUDOCODE
//fx addArrs
//convert arrs to strings using.toString()method
//.join to join arr & arr1 to remove comma


//*******Week3 Group IN PROGRESS***********
// function addArrs(arr, arr1) {
//   let arrStr = arr.join("");
//   let arr1Str = arr1.join("");
//  // console.log(arrStr, arr1Str);

//   let sum = Number(arrStr) + Number(arr1Str)
//   //console.log(sum);
//   let result = sum.toString()
//   console.log(result.split(""));
// }
// addArrs([3, 2, 6, 6], [-7, 2, 2, 8])
//need to find how to join "-" with number.


//********TECHTONICA Group IN PROGRESS*****
// function addArrays(arr1, arr2){
//   if(arr1.length === 0 && arr2.length ===0){
//     return [];//in case there is an empty array
//   }
//   let arr1ToString = arr1.join("");
//   let arr2ToString = arr2.join("");

//   let arr1Number = Number(arr1ToString);//can use parseInt too
//   let arr2Number = Number(arr2ToString);
//   return arr1Number + arr2Number;
// }
// //Finished to the result, but didn't add the result into array

// //********Supriya Solution IN PROGRESS*****
// function addArray(arr1, arr2) {

//   function helperfun(arr) {
//     let strNum = "";
//     for (let i = 0; i < arr.length; i++) {
//       let str = arr[i].toString();
//       strNum += str;
//     }
//     return Number(strNum);
//   }

//   let num1 = helperfun(arr1);
//   let num2 = helperfun(arr2);

//   let sum = num1 + num2;
//   if (sum < 1) {
//     sum = Math.abs(sum)
//     let str = sum.toString()
//     console.log(typeof str)
//     let arr = [...str]
//     let negeNum = "-" + arr[0]
//     arr.shift()
//     return [negeNum, ...arr].map(Number)
//   } else {
//     return [...sum.toString()].map(Number)
//   }
// }
// console.log(addArray([-3, 2, 9], [1, 2])); // -317 //  [ -3, 1, 7 ]

// console.log(addArray([3, 2, 9], [1, 2])); // [ 3, 4, 1 ]
// //does not have edge cases or if it is an empty array