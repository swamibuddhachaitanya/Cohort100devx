/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  
  str1 = str1.toLowerCase();
  str2= str2.toLowerCase();

  let l1 = str1.length - 1;
  let l2 = str2.length - 1;

  if(l1!=l2){
    return false;
  }
  if (l1==0) {
    return true;
  }
  
  let sum = 0;

  while (l1 >=0 && l2 >= 0) {
    sum+= str1[l1--].charCodeAt() - str2[l2--].charCodeAt();
  }

  if (sum==0) {
    return true;
  }
  else{
    return false;
  }

}


module.exports = isAnagram;
