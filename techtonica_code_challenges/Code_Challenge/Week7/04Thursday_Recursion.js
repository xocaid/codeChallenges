//PROMPT
/*
You are on a set of stairs that are numbered 0 - 100 from top to bottom. 
You are given your starting stair number, a stride width (meaning how many stairs you step down at a time) and being walking down. 
Return an array containing every stair you step on, beginning from the lowest stair. 
Don't step below 0, it's Lava and you'll burn/fail the Kata.
A test is in place to check for the presence of for/while to ensure recursion is used so avoid using these terms in your solution.

If width is 0, clearly you're not going anywhere so please return an empty array.

[codewars](https://www.codewars.com/kata/577ff873d648a1c5a9000143)-challenge
*/

console.log(countdown(100), 'Expect: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1] etc');

//************** SOLUTION 1 **************
function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    var countdownArray = countdown(n - 1);
    //console.log(countdownArray)
    countdownArray.unshift(n);
    return countdownArray;
  }
}