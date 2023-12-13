//PROMPT
/*
 Reverse the provided string.
// Your result must be a string.
*/

console.log(reverseString("hello"), "olleh");
console.log(reverseString("Howdy"), "ydwoH");
console.log(reverseString("Greetings from Techtonica"), "acinothceT morf sgniteerG");

//********SOLUTION 1***********
function reverseString(str) {
  //return str.split("").reverse().join("")
  console.log(str.split("").reverse().join(" "));
}

//***********SOLUTION 2********
function longVersion(str1) {
  let answer = ""
  for (let i = str1.length - 1; i >= 0; i--) {
    answer += str1[i];
  }
  console.log(answer);
}

//********* SOLUTION 3******
function reverseString(str) {
  // splits the string into an array of the characters in string
  let newStr = str.split("");
  // reverses the characters and rejoins the array into a string
  return (newStr.reverse().join(""));
  // return str.split("").reverse().join("");
}

// Bonus points
// Can you think about edge cases? 