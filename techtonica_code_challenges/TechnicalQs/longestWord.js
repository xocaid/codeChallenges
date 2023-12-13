//PROMPT
/*
// Write a function that takes in a string and returns the largest word in the string. 
If there are two or more words that are the same length, return the first word from the string with that length. 
Ignore punctuation and assume the string will not be empty. 
*/

/* PSEUDOCODE 1
Rgex for all symbols to replace
Replace symbols while strings
Split(" ") sentence into array of each word
Empty array to hold longest word
For Loop iterate through each element in split array
Compare word at position[i] with longestWord []
if word[i].length > longestWord.length === True
.push to longestWord

*/

//********SOLUTION 1 ***********
// function longestWord(word) {
//   let symbols = /['?,!@#$%^&*()]/g;
//   let replaceSymbols = word.replace(symbols, "").split(" ");
//   // let splitWord = replaceSymbols.split(" ");
//   // let sorted = splitWord.sort((a, b) => b.length - a.length);
//   let sorted = replaceSymbols.sort((a, b) => b.length - a.length)

//   return sorted[0];
// }

// console.log(longestWord('Which word in the string will be the longest?'), "Expected: longest");
// console.log(longestWord("I love JavaScript, even though it’s javascript,"), 'Expected: Javascript');
