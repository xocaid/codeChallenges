//PROMPT
/*
You are given a table, in which every key is a stringified number, and each corresponding value is an array of characters, e.g.
Create a function that returns a table with the same keys, but each character should appear only once among the value-arrays, e.g

Whenever two keys share the same character, they should be compared numerically, and the larger key will keep that character. 
That's why in the example above the array under the key "2" contains "A" and "B", as 2 > 1.
If duplicate characters are found in the same array, the first occurance should be kept.

[codewars](https://www.codewars.com/kata/5e8dd197c122f6001a8637ca
*/