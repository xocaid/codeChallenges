// Week 4 - Arrays and Objects

// Exercise 1. Make an empty array named animals
let animalArr = [];

// Exercise 2. Add the string "frog" to the array
animalArr.push("frog");
console.log(animalArr);

// Exercise 3. Add 4 more animals of your choice to the array. Try to add all of them in one line of code.
animalArr.push("flamingo", "tortoise", "armadillo", "crocodile");
console.log(animalArr);

// Exercise 4. Update the first item in the array to be "gorilla"
animalArr.unshift("gorilla");
console.log(animalArr);

// Exercise 5. Print the number of items in the array (use the array property that will give you this information)
console.log(animalArr.length);

// Exercise 6. Print the first item in the array
console.log(animalArr[0]);

// Exercise 7. Print the last item in the array (as part of your answer, use the same array property you used in exercise 5 above)
animalArr[animalArr.length-1];
console.log(animalArr[animalArr.length-1])

// Exercise 8. Remove the last item from the array
console.log(animalArr.pop());

// Exercise 9. Now make a new array named assortedThings that contains at least 3 strings and 3 numbers.
let assortedThingsArr = ["cat", "string", "hat", 1,2,3];
console.log(assortedThingsArr)

// Exercise 10. Write a for loop that iterates through the assortedThings array and prints each index and item, such as:
// Item #0 is potato
// Item #1 is 4
// Item #2 is Hello World
// ...
for(let i =0; i < assortedThingsArr.length;i++){
    console.log("Item #"  +i +" "+ assortedThingsArr[i]);
};

// Exercise 11. Write a function that takes an array of numbers as a parameter. For each number in the array,
// print the number and "BIG" if it's over 100, "small" if it's between 0 and 100, and "negative" if
// it's less than 0. Example:
// if the array is [-2, 200, 50], print:
// -2 negative
// 200 BIG
// 50 small
//
// Then write some function calls you would use to test your function.

function numberArray(x){
if(x > 100){
    return "BIG";
}
if(x>=0){
    return "small";
}
if(x< 0){
    return "negative";
}
}
console.log(numberArray(100));
console.log(numberArray(101));
console.log(numberArray(99));
console.log(numberArray(0));
console.log(numberArray(-1));

// Exercise 12. Make an object called me that contains the following keys: name, favoriteAnimal, favoriteNumber
// The values of those keys can be whatever you choose.
let meObj = {
    name: "Xochitl",
    favoriteAnimal: "Penguin",
    favoriteNumber: 45
};
console.log(meObj);

// Exercise 13. Add another 2 keys and values to the object (you choose what they are)
meObj.shoeSize = 10.5;
meObj.height = "6'0";
console.log(meObj);

// Exercise 14. Update the favoriteAnimal value to something different
meObj.favoriteAnimal = "Tiger";
console.log(meObj);

// Exercise 15. Print the value of favoriteAnimal.
// Note: there are at least 2 ways to get the value of a key, try to write both.
console.log(meObj.favoriteAnimal);
console.log(meObj["favoriteAnimal"]);

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
//This assignment I found the easiest, the source that helped me understand this topic most was a book "JavaScript for Kids"
//that I used to prep for the Techtonica workshops and to understand the basics of JS.

// Email your file to the course staff,
// or commit your file to GitHub and email us a link.
