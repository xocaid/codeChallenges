//PROMPT
/* 
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array. 
You can ignore case.
*/

console.log(mutation(["hello", "hey"]), "Expected Output: false");
console.log(mutation(["hello", "Hello"]), "Expected Output: true");
console.log(mutation(["Mary", "Army"]), "Expected Output: true");
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]), "Expected Output: true");
console.log(mutation(["goodmorning", "goodmorninggoodmorning"]), "Expected Output: true");
console.log(mutation(["", ""]), "Expected Output: true");
console.log(mutation(["", "abc"]), "Expected Output: false");

//************** SOLUTION 1 **************
function mutation(arr) {
  let firstWord = arr[0].toLowerCase();
  let secondWord = arr[1].toLowerCase();
  for (let i = 0; i < secondWord.length; i++) {
    if (firstWord.indexOf(secondWord[i]) === -1) {
      return false;
    }
  }
  return true;
}

//************** SOLUTION 2 **************
function mutation(arr) {
  let firstWord = arr[0].toLowerCase();
  let secondWord = arr[1].toLowerCase();

  for (let i = 0; i < secondWord.length; i++) {
    //checks if the letters in firstWord are NOT the same as letters in secondWord
    if (!firstWord.includes(secondWord[i])) {
      return false;//if letters are not present in secondWord
    }
    console.log(secondWord[i]);//prints letters that present in both words
  }
  return true;//if letters are present in secondWord
}

//************** SOLUTION 3 **************
function mutation(arr) {
  // convert both strings to arrays of letters
  let str1Arr = arr[0].toLowerCase().split("");
  let str2Arr = arr[1].toLowerCase().split("");
  // brute force
  let count = 0;
  // loop through str2Arr
  for (let i = 0; i < str2Arr.length; i++) {
    // if string 1 has a character from string 2
    if (str1Arr.includes(str2Arr[i])) {
      // increment
      count++;
    }
  }
  // check that all letters are accounted for
  return count === str2Arr.length;
}

//************** SOLUTION 4 **************
function mutation(arr) {
  // convert both strings to arrays of letters
  let str1Arr = arr[0].toLowerCase().split("");
  let str2Arr = arr[1].toLowerCase().split("");

  // filter all the letters in string 2 that are in string 1
  const results = str2Arr.filter((arrVal) => str1Arr.includes(arrVal));
  // if that filtered result is the same length as the second string
  // all letters accounted for
  return results.length === str2Arr.length;
}

