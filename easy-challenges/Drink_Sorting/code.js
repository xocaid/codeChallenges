//PROMPT
/*
 You will be given an array of drinks, with each drink being an object with two properties: name and price. 
 Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.
Assume that the following array of drink objects needs to be sorted:
*/

const drinks = [
  { name: "lemonade", price: 50 },
  { name: "lime", price: 10 }
]

const drinks1 = [
  { name: 'lemonade', price: 90 },
  { name: 'lime', price: 432 },
  { name: 'peach', price: 23 }
];

const drinks2 = [
  { name: 'water', price: 120 },
  { name: 'lime', price: 80 },
  { name: 'peach', price: 90 }
];

function sortDrinks(beverage){
  let sortArr = beverage.sort((a,b)=> a.price - b.price);
  return sortArr;
}
console.log(sortDrinks(drinks));
console.log(sortDrinks(drinks1));
console.log(sortDrinks(drinks2));
