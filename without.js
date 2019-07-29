const eqArrays = require('./eqArrays');
const assertArraysEqual =  require('./assertArraysEqual');

// include is pretty new may not be browser compatible
// const without = function(array1, array2){
//   let newArray = [];

//   for(let i = 0; i < array1.length; i++){
//     if(!array2.includes(array1[i])){
//       newArray.push(array1[i]);
//     }
//   }
//   return newArray;
// };
//

const without = function(array1, array2) {
  let newArray = [];

  for (let i = 0; i < array1.length; i++) {
    let foundNum = false;
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        foundNum = true;
      }
    }
    if (foundNum === false) {
      newArray.push(array1[i]);
    }
  }
  return newArray;
};

module.exports = without;
// assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
// const words = ["hello", "world", "lighthouse"];
// without(["hello", "world", "lighthouse"], ["lighthouse"]);
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);
