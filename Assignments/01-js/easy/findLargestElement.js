/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    if(numbers.length === 0){
        return;
    }
    let largest = Number.MIN_SAFE_INTEGER;

    for (let index = 0; index < numbers.length; index++) {
        
        if (largest < numbers[index]) {
            largest = numbers[index];
        }
        
    }
    return largest;
}

module.exports = findLargestElement;