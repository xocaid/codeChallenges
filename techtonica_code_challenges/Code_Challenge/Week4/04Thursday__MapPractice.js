// A list of friends stored as an array of objects
const myFriends = [
  { firstname: 'Isma', lastname: 'Kirby', age: 27 },
  { firstname: 'Aaliya', lastname: 'Becker', age: 35 },
  { firstname: 'Adnaan', lastname: 'Tang', age: 22 },
  { firstname: 'Rafi', lastname: 'Pearson', age: 29 },
  { firstname: 'Eshaal', lastname: 'Gould', age: 29 },
  { firstname: 'Scarlett', lastname: 'Whitehead', age: 45 },
  { firstname: 'Arslan', lastname: 'Esparza', age: 38 },
  { firstname: 'Isla-Mae', lastname: 'Hastings', age: 46 },
  { firstname: 'Eamonn', lastname: 'Vang', age: 21 },
  { firstname: 'Haya', lastname: 'Mcdougall', age: 31 },
];
// Task: 
// Loop 1: Adds a property to each friend storing their initials and calculates the sum of all ages to use in calculation of average age
// Loop 2: Gets an array of all friends older than the average age
// Loop 3: Gets an array of strings listing the initials and age
// Expected output: [ 'AB: 35', 'SW: 45', 'AE: 38', 'IH: 46' ]
//Bonus: How you can work in this programmatically (using a function)

function friendsInfo(arr) {
  //******LOOP 1**********
  //Adds the new Key:Value for initials
  let loop1 = arr.map(function (element) {
    let firstInitial = element.firstname[0];//takes myFriends.firstname's first letter 
    let lastInitial = element.lastname[0];//takes myFriends.lastname's first letter 
    element.initials = firstInitial + lastInitial;//adds the key(initials) and the value firs letter of first & last name
  })

  //*****LOOP 1*****
  //Calculating average age
  let sum = 0;
  arr.forEach(function (element) {
    sum += element.age//adding all ages to sum
  })
  avgAge = sum / arr.length;//average is total/# of  people
  console.log("The average age is: " + avgAge);

  //*****LOOP 2******
  const oldPeople = arr.filter(element => element.age > avgAge)//myFriends.age > avgAge
  console.log(oldPeople);//prints new array of people who are over the average age

  //***LOOP 3****
  let loop3 = arr.map(element => {
    return element.initials + ": " + element.age//returns new array with key(initials) and value(age)
    //myFriends.initials & myFriends.age
  })
  console.log(loop3);
}
console.log(friendsInfo(myFriends))

