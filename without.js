const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  let bool = eqArrays(array1, array2);
  if (bool) {
    console.log(`✅Assertion Passed: [${array1}] === [${array2}]`);
  } else {
    console.log(`⛔Assertion Failed: [${array1}] !== [${array2}]`);
  }
};

// const without = function(array1, array2){
//   let newArray = [];

//   for(let i = 0; i < array1.length; i++){
//     if(!array2.includes(array1[i])){
//       newArray.push(array1[i]);
//     }
//   }
//   return newArray;
// };


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

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
