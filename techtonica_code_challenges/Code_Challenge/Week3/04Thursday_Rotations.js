// PROMPT
/*
Given two input strings, s1 and s2, write code to check if s2 is a rotation of s1.
A String is said to be a rotation of another String, if it has the same length, contains the same characters, and they were rotated around one of the characters.
Remember that there is a function indexOf();
*/

console.log(isRotation("node", "edon"), "Expect: false");
console.log(isRotation("coding", "ingcod"), "Expect: true");
console.log(isRotation("hello world", "worldhello "), "Expect: true");
console.log(isRotation("techtonica", "tonicatech"), "Expect: true");
console.log(isRotation("techtonica", "tnicatecho"), "Expect: false");

//PSEUDOCODE
//function will have 2 STRING parameters
//if else statement if length of both are = using .length
//.indexOf() to check if all letters are the same 
//USE for loop for indexOf();
//if indexOf() > all letters present
//if indexOf()  is false, don't match
//use slice? to split from center and store to a variable, and use unshift()


//************** SOLUTION 1 **************
function isRotation(str1, str2) {
  if (str1.length === str2.length && (str1 + str1).indexOf(str2) > 0) {
    return true
  } else {
    return false
  }
}

//************** SOLUTION 2 **************
function isRotation(str1, str2) {
  if (str1.length === str2.length && (str1 + str1).includes(str2)) {
    return true
  } else {
    return false
  }
}

//************** SOLUTION 3 **************
function strRotation(str1, str2) {
  return (str1.length == str2.length) &&
    ((str1 + str1).indexOf(str2) != -1)
}

//************** SOLUTION 4 **************
function isRotation(str1, str2) {
  let newStr = str2 + str2;//results in ingcodingcod
  if (str1.length !== str2.length) {
    return false;
  } else {
    return newStr.includes(str1);//returns boolean true
  }
}

//************** SOLUTION 5 **************
function isRotation(s1, s2) {
  if (s1.length != s2.length) {
    return false;
  }
  let concat = s1.concat(s1);
  console.log(concat);
  //"nodenode".indexOf("edon")
  //"codingcoding".indexOf("ingcod")
  console.log(concat.indexOf(s2));
  // indexOf returns a number (index of where your parameter is in the first string)
  //if is not there, return -1
  if (concat.indexOf(s2) != -1) {
    return true;
  } else {
    return false;
  }
}

//********NOTES: SOLUTION 1***********
//indexOf - gives answer in number or -1
//includes - boolean gives true or false
