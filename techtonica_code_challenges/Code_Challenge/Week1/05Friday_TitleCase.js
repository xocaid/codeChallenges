//PROMPT
/*
 Return the provided string with the first letter of each word capitalized. 
 Make sure the rest of the word is in lower case.
*/

console.log("");
console.log("Friday, 7/29/22 - Capitalize First Letter of Each Word");
console.log(titleCase("I'm a little tea pot"), "Expected Output: 'I'm A Little Tea Pot'");
console.log(titleCase("sHoRt AnD sToUt"), "Expected Output: 'Short And Stout'");
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"), "Expected Output: 'Here Is My Handle Here Is My Spout'");

//******* SOLUTION 1*********
function titleCase(str) {
  str = str.toLowerCase();// i'm a little tea pot
  str = str.split(" ");//[i'm, a, little, tea, pot]

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
  }
  return str.join(" ")
}

//***********SOLUTION 2*********
function titleCase(str) {
  // split string into an array of words
  let strArr = str.toLowerCase().split(" ");
  // loop through array of words
  for (let i = 0; i < strArr.length; i++) {
    // sets each element to the concatenation of the first letter capitalized and the rest of the word
    strArr[i] = strArr[i].charAt().toUpperCase() + strArr[i].slice(1);
  }
  // recombine the words into a string with a space in between
  return strArr.join(" ");
}
