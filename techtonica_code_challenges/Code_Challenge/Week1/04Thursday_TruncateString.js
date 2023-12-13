//PROMPT
/*
Write a function Truncate a string with two parameters. 
First, the string (first argument) and the given maximum string length (second argument). 
Return the truncated string with a ... ending.
*/

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8), "Expected Output: 'A-tisket...'");
console.log(truncateString("A-", 1), "Expected Output: 'A...'");
console.log(truncateString("Absolutely Longer", 2), "Expected Output: 'Ab...'");
console.log(truncateString("", 3), "Expected Output '...'");
console.log(truncateString("ab", 0), "Expected Output: '...'");

//******* SOLUTION 1************
function truncateStr(str1, num1) {
  return str1.slice(0, num1) + "...";
}

//******** SOLUTION 2************
function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  }
  else {
    return str;
  }
}

//******* SOLUTION 3*********
function truncateString(str, maxLength) {
  // if your string is less than the length, return the original string
  if (str.length < maxLength) {
    return str + "...";
  }
  // otherwise, return the string from index 0 to the max length
  return str.slice(0, maxLength) + "...";
}
