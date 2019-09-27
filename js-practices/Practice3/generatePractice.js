'use strict'

function generateOutput(input, target){
  const include = input.includes(target);
  if (include === true) {
    return input.indexOf(target);
  } else {
    return -1;
  }
}
// bai nay co cach tu tao them 2 test cho target o dau va o cuoi roi cho them vao arr nhung e thay hoi tu nen khong lam theo cach do :v 
function generateArray(testLengthArray,index){
  return Array.from({length: testLengthArray[index]}, () => Math.floor(Math.random() * 300));
}

function generate(testLengthArray){
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
