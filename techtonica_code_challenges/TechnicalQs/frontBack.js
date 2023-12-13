//PROMPT
/*
Given a string, return a new string where the first and last chars have been exchanged.
*/
console.log(frontBack('code'), 'Expected: eodc')
console.log(frontBack('a'), 'Expected: a')
console.log(frontBack('ab'), 'Expected: ba')

//********SOLUTION 1 ***********
function frontBack(str) {
  let arr = [];

  for (let i = 0; i < str.length; i++) {
    arr.unshift(str[i])
  }
  return arr.join("")
}

//********SOLUTION 2 ***********
function frontBack(str) {
  let arr = [];

  for (let i = str.length - 1; i >= 0; i--) {
    arr.push(str[i]);
  }
  return arr.join("");
}

//********SOLUTION 3 ***********
function frontBack(str) {
  return str.split("").reverse().join("");
}
console.log(frontBack('code'), 'Expected: eodc')
console.log(frontBack('a'), 'Expected: a')
console.log(frontBack('ab'), 'Expected: ba')