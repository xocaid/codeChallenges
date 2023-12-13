//PROMPT
/*
Recreate the function map() without using map. 
Your mapRecreate function takes two parameters: an array and a function to implement in each element of that array
Try to recreate map without using map 
*/

//************** SOLUTION 1 **************
const mapRecreate = (arr, func) => {
  let mappedArr = [];
  for (let i = 0; i < arr.length; i++) {
    let answer = func(arr[i])
    mappedArr.push(answer);
  }
  return mappedArr;
}

//************** SOLUTION 2 **************
const mapRecreate = (arr, func) => {
  let finalArr = [];
  for (let i = 0; i < arr.length; i++) {
    finalArr.push(func(arr[i]))
  }
  return finalArr;
}
//************** SOLUTION 3 **************
const mapRecreate = (arr, func) => {
  let finalArr = [];
  for (let i = 0; i < arr.length; i++) {
    let temp = func(arr[i])
    finalArr.push(func(temp))
  }
  return finalArr;
}


console.log(mapRecreate([1, 2, 3], x => x * 2), 'Expect: [2, 4, 6]');
console.log(mapRecreate([5, 6, 7, 8, 9, 10], x => -x), 'Expect: [-5, -6, -7, -8, -9, -10]');
console.log(mapRecreate(["a", "b", "c", "d"], x => x.toUpperCase()), 'Expect: ["A", "B", "C", "D"]');
