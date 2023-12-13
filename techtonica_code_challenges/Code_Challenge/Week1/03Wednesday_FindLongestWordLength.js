//PROMPT
/*
Return the length of the longest word in the provided sentence.
Your output should be a number.
*/

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"), "Expected Output: 6");
console.log(findLongestWordLength("May the force be with you"), "Expected Output: 5");
console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"), "Expected Output: 19");
console.log(findLongestWordLength(""), "Expected Output: 0");

//************SOLUTION 1************
function findLongestWordLength(str) {
  let arrString = str.split(" ");
  let maxLength = 0;

  for (let i = 0; i < arrString.length; i++) {
    if (arrString[i].length > maxLength) {
      maxLength = arrString[i].length;
    }
  }
  return maxLength;
}

//************SOLUTION 2************
function findLongestWordLength(str) {
  // split the string into an array of words (separated by a space)
  let strArr = str.split(' ');
  // set the max length to the length of the first word
  let maxLen = strArr[0].length;

  // loop through the array
  for (let i = 1; i < strArr.length; i++) {
    // if the length of a word is greater than the max length
    if (strArr[i].length >= maxLen) {
      // set the max length to that word's length
      maxLen = strArr[i].length;
    }
  }
  // return the final max length
  return maxLen;
}

