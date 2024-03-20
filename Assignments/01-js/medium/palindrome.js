/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  
  str = str.toLowerCase();
  str = str.replace(/[^\w]|_/g,"");
  let left = 0;
  let right = str.length -1;

  //return true if string is empty
  if (left===right) {
    return true;
  }

  //traverse trough the array and check from front and back if they're equal if not then return false else continue

  while (left < right) {

    if (str[left]!== str[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

// console.log(isPalindrome("Eva, can I see bees in a cave?"));

module.exports = isPalindrome;
