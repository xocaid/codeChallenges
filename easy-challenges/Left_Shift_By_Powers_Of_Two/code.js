//PROMPT
/*The left shift operation is similar to multiplication by powers of two.
Write a function that mimics (without the use of <<) the left shift operator and returns the result from the two given integers.
  10 << 3 = 10 * 2^3 = 10 * 8 = 80
-32 << 2 = -32 * 2^2 = -32 * 4 = -128
5 << 2 = 5 * 2^2 = 5 * 4 = 20
*/

function shiftToLeft(num, powerOf2){
  let toPowerOf2 = Math.pow(2,powerOf2);
  let answer = num * toPowerOf2;
  return answer;
}

console.log(shiftToLeft(5, 2), "should return 20")

console.log(shiftToLeft(10, 3), "should return 80")

console.log(shiftToLeft(-32, 2), "should return -128")

console.log(shiftToLeft(-6, 5), "should return -192")

console.log(shiftToLeft(12, 4),"should return 192")

console.log(shiftToLeft(46, 6), "should return 2944")

//************* NOTES *******************
// There will be no negative values for the second parameter.
// This challenge is more like recreating of the left shift operation, thus, the use of the operator directly is prohibited.
// Alternatively, you can solve this challenge via recursion.
// A recursive version of this challenge can be found via this link.

