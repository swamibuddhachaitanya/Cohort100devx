/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    const vowelarr = ['a','e','i','o','u','A','E','I','O','U'];
    let counter = 0;
    const characters = str.split('');

    characters.forEach(alphabet => {
      
      //find if the alphabet is present in the vowelarr or not
      let index = vowelarr.findIndex(obj => obj.charCodeAt() === alphabet.charCodeAt() );

      //if yes then increase the counter
      if(index!== -1){
        counter++;
      }
    });

    return counter;
}

//  console.log(countVowels("Hello, world!"));
module.exports = countVowels;