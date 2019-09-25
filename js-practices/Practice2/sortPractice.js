'use strict'

function sort(input) {
  // return input.sort((a,b) => a-b); 
  // Remove this line and change to your own algorithm
  // Bubble sort 
  let len = input.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if( input[j] > input[j + 1]){
        let tmp = input[j];
        input[j] = input[j + 1];
        input[j + 1] = tmp;
      }   
    }
  }
  return input;
}

module.exports = sort
