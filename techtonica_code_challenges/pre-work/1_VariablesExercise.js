// Week 1 - Variables
// Data Types and Variables

// Exercise 1. Simply declare a variable named 'emptyVariable'
let emptyVariable = "";

// Exercise 2. Declare a variable called 'myName'
let myName = "";

// Exercise 3. Assign your name as the value for 'myName'
myName = "Xochitl";

// Exercise 4. Declare a variable called dreamDestination and give it the value
// of what your dream vacation destination is.
let dreamDestination = "Iceland";

// Exercise 5. Make the following variables and assignments
// - a variable called num1 with a value greater than 1 and less than 10
// - a variable called num2 with a value of greater than or equal to 1 and less
// than or equal to 10
let num1 = 5;
let num2 = 1;

// Exercise 6. Write a comment below explaining the difference between the rules
// for num1 and num2 from Exercise 5. What numbers would be valid values for
// num2 but not num1?
//num1 would allow for numbers 2 to 9(numbers in between 1&10) to be included; num2 would allow for all numbers from 1 to 10 to be included/used;

// Exercise 7. Now we will try some addition.
// a. Assign the the values of 4 and 6 to num1 and num2, respectively.
// b. Make a new variable called 'theSum', and use 'num1' and
// 'num2' to assign its value using the "+" operator.
num1 = 4;
num2 = 6;
let theSum = num1 + num2;
console.log(theSum);

// Exercise 8. Now we will try some multiplication.
// Make a new variable called 'theProduct', multiply num1 and num2 and assign
// the resulting value to 'theProduct'.
let theProduct = num1 * num2;
console.log(theProduct);

// Exercise 9.
// Make a new variable called 'statement' and using 'myName' and
// 'dreamDestination' and the concatenation method of your choice, make the
// value of statement to be:
// "Hi, my name is <your name>, and I can't wait to visit <your destination>!"
let statement = "Hi my name is "+ myName + " and I can't wait to visit "+ dreamDestination + "!";
console.log(statement);

// Exercise 10. What is the data type of the value stored in 'dreamDestination',
// place your answer in the quotes below:
const myAnswerForExercise10 = "string";

// Exercise 11. What is the data type of the value stored in 'product',
// place your answer in the quotes below:
const myAnswerForExercise11 = "number";

// Exercise 12. What do you think the value of emptyVariable is?
// Place your answer below:
const myAnswerForExercise12 = "string";

// Exercise 13. If
const A = "R";
const B = 1;
const C = 4;
const D = "D";

// What is the value of B + C
const myAnswerForExercise13 = "5";
console.log(B+C);

// Exercise 14 What is the value of
// A + "n" + D
const myAnswerForExercise14 = "RnD";
console.log(A + "n" + D);

// Exercise 15 What is the value of
// A + B * 2 + D + C / 2:
const myAnswerForExercise15 = "R2D2";
console.log(A + B * 2 + D + C / 2);

// Exercise 16 What is the value of A * B
const myAnswerForExercise16 = "NaN";
console.log(A * B);

// Exercise 17 What is the value of true || false
const myAnswerForExercise17 = "boolean";

// Exercise 18 What is the value of 1 === "1"
const myAnswerForExercise18 = "false";
console.log(1 === "1");

// Exercise 19 What is the value of 1 == "1"
const myAnswerForExercise19 = "true";
console.log(1 == "1");

// Exercise 20 What is the value of 1 < 1
const myAnswerForExercise20 = "false";
console.log(1 < 1);

// Exercise 21 What is the value of 1 < 2 < 3
const myAnswerForExercise21 = "true";
console.log(1 < 2 < 3);

// Exercise 22 What is the value of 2 < 1 < 3
const myAnswerForExercise22 = "true";
console.log(2 < 1 < 3);
