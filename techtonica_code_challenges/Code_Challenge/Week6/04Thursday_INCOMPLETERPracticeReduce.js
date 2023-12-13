//PROMPT
/*
Reduce is a built-in method that takes two arguments: 
  - the first one is a function
  - the second one is the start point in the array

  numbers.reduce(() => {}, 0) // in general when we are working with numbers we start at 0

  The first argument of reduce is a function that takes two parameters: the accumulate and the element
  numbers.reduce((acc, element) => {}, 0)
  what is inside the function (inside the curly brackets is what we want to happen to those elements)

FIRST TASK: if you want to sum all the elements in number, how you can work that using reduce? 

  BONUS: 
  Flatten an Array
  Using reduce(), you can transform a multidimensional array into a one-dimensional collection.
  var rows = [[2, 3, 5], [1, 2, 4], [8, 5, 5]]
  
*/
const numbers = [2, 3, 5, 1, 2, 4]