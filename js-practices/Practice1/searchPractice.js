'use strict'

function search(input, target) {
  // return input.indexOf(target); 
  // Remove this line and change to your own algorithm
  const includes = input.includes(target);
  if(includes === true){
    for (let index = 0 ; index < (input.length); index++) {
      let element = input[index];
      if (element === target) {
        return index;
      } 
    }
  }
  else{
    return -1;
  }
  
}

module.exports = search
