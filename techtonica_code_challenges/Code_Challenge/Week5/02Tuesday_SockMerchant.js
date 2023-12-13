//PROMPT
/*
John works at a clothing store. He has a large pile of socks that he must pair by color for sale. 
Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

For example, there are n=7 socks with colors array=[1,2,1,2,1,3,2]. There is one pair of color 1  and one of color 2. 
There are three odd socks left, one of each color. The number of pairs is 2.\

sockMerchant has the following parameter(s):

- _n_: the number of socks in the pile
- _array_: the colors of each sock

**Output Format**
Return the total number of _matching pairs_ of socks that John can sell.
*/

console.log(sockMerchant(7, [1, 2, 2, 1, 2, 1, 3, 2]), 'Expect: 3');

function sockMerchant(n, array) {
  let arrSort = array.sort()
  console.log(arrSort)
  let count = 0;
  for (let i = 0; i < arrSort.length; i++) {
    if (arrSort[i] === arrSort[i + 1]) {
      count += 1
      i += 1;//adds 1 to i, so the next iteration it will be 2 compared to 3, essentially moving down the line to the next pair
    }
  }
  return count;
}