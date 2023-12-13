//PROMPT
/*
On your website you want users to use a strong password, instead of something easy for someone to guess, like their birthday or dog's name.

- Must contain at least one number (Code: NUM)
- Must contain at least one symbol from the allowed symbols (!@&) (Code: SYM)
- Must contain at least one uppercase ASCII letter (Code: UPPER)
- Must contain at least one lowercase ASCII letter (Code: LOWER)

Write a function to check a prospective password. 
Return true if it meets the critera or an array containing the shorthand code for rules it does not meet. 
This array is needed so you can show the user on the website what they are missing.

EXAMPLE:
function checkPassword() {
}
checkPassword('0s!To') => true
checkPassword('0siTo') => ['SYM']
checkPassword('OsiTo') => ['NUM' , 'SYM']
*/

console.log(checkPassword('safe'))

function checkPassword(str) {
  let errorMessage = [];//Empty array to push errors into

  //the entire str will be run through each if statement 
  //.search() runs through entire str to find the regex(the number, symbol, lower/uppercase)
  if (str.search(/[a-z]/) < 0) {
    errorMessage.push('LOWER');
  }
  if (str.search(/[A-Z]/) < 0) {
    errorMessage.push('UPPER');
  }
  if (str.search(/[0-9]/) < 0) {
    errorMessage.push('NUM');
  }
  if (str.search(/[!@&]/) < 0) {
    errorMessage.push('SYM');
  }
  if (errorMessage, str.length === 0) {
    return true;//if there are no errorMessages, password complies with all requirements
  }
  return errorMessage;//will print all the missing requirements
}