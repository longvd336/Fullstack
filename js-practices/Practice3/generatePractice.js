'use strict'

function generateOutput(input, target){
  const include = input.includes(target);
  if (include === true) {
    return input.indexOf(target);
  } else {
    return -1;
  }
}

function generateArray(testLengthArray,index){
  return Array.from({length: testLengthArray[index]}, () => Math.floor(Math.random() * 300));
}

function generate(testLengthArray){
  // return Array.from({length : testLengthArray.length})
  //   .map(item => ({
  //     input: Array.from({length: item}).map(item => []),
  //     target: 0,
  //     output: -1
  //   })
  // ); 
  // Remove this line and change to your own algorithm
  let arr = [];
  for (let index = 0; index < testLengthArray.length; index++) {
    let target = testLengthArray[index];
    let input = generateArray(testLengthArray,index);
    let output = generateOutput(input,target);
    
    let testData = {
      input: input,
      output: output,
      target: target
    };
    arr.push(testData);
  }
  return arr;
}

module.exports = generate
