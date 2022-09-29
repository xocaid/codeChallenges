//PROMPT
/*
Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.
 If 27 is our input, we should return false because swapping the digits gives us 72, and 72 > 27. On the other hand, swapping 43 gives us 34, and 43 > 34.
*/
//************** My Solution ***************
//Only works for double digit numbers
function largestSwap(num) {
  let convertNum = num.toString().split('');
  let a = convertNum[0]
  let b = convertNum[1]

  if (num >= parseInt(b + a)) {
    return true;
  } else if (num < parseInt(b + a)) {
    return false;
  } 
}
console.log(largestSwap(27), false, '27 < 72, so not largest swap.')
console.log(largestSwap(43), true, '43 > 34, so largest swap.')
console.log(largestSwap(14), false, '14 < 41, so not largest swap.')
console.log(largestSwap(53), true, '53 > 35, so largest swap.')
console.log(largestSwap(99), true, 'Cannot do better, so largest swap.')

//**************Solution 1 - Alma ***************
function largestSwap(num) {
return num >= num.toString().split('').reverse().join('');
}
console.log(largestSwap(27), false, '27 < 72, so not largest swap.')
console.log(largestSwap(43), true, '43 > 34, so largest swap.')
console.log(largestSwap(14), false, '14 < 41, so not largest swap.')
console.log(largestSwap(53), true, '53 > 35, so largest swap.')
console.log(largestSwap(99), true, 'Cannot do better, so largest swap.')

//**************Solution 2 - Berlin ***************
function largestSwap(num) {
  let swap = [...(num.toString())]
  console.log(swap)

  return num >= parseInt([...(num + "")].reverse().join(""));
}
console.log(largestSwap(27), false, '27 < 72, so not largest swap.')
console.log(largestSwap(43), true, '43 > 34, so largest swap.')
console.log(largestSwap(14), false, '14 < 41, so not largest swap.')
console.log(largestSwap(53), true, '53 > 35, so largest swap.')
console.log(largestSwap(99), true, 'Cannot do better, so largest swap.')

//**************Solution 3 - Ruth ***************
function largestSwap(num) {
  if (String(num)[1] > String(num)[0]) {
    return false;
  } else {
    return true;
  }
}
console.log(largestSwap(27), false, '27 < 72, so not largest swap.')
console.log(largestSwap(43), true, '43 > 34, so largest swap.')
console.log(largestSwap(14), false, '14 < 41, so not largest swap.')
console.log(largestSwap(53), true, '53 > 35, so largest swap.')
console.log(largestSwap(99), true, 'Cannot do better, so largest swap.')

//**************Solution 4 - Ruth ***************
function largestSwap(num) {
  if (String(num).charAt(1) > String(num).charAt(0)) {
    return false;
  } else {
    return true;
  }
}
console.log(largestSwap(27), false, '27 < 72, so not largest swap.')
console.log(largestSwap(43), true, '43 > 34, so largest swap.')
console.log(largestSwap(14), false, '14 < 41, so not largest swap.')
console.log(largestSwap(53), true, '53 > 35, so largest swap.')
console.log(largestSwap(99), true, 'Cannot do better, so largest swap.')

//**************Solution 5 - Linda ***************
function largestSwap(num) {
  //fail fast
if(num > 99){
  return "Please enter a two-digit number."
}
  //Asking if the first or second digit is larger
  return Math.floor(num/10) >=num%10;
}
console.log(largestSwap(27), false, '27 < 72, so not largest swap.')
console.log(largestSwap(43), true, '43 > 34, so largest swap.')
console.log(largestSwap(14), false, '14 < 41, so not largest swap.')
console.log(largestSwap(53), true, '53 > 35, so largest swap.')
console.log(largestSwap(99), true, 'Cannot do better, so largest swap.')