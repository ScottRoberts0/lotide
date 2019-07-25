const eqArrays = function(array1, array2){
  if(array1.length !== array2.length){
    return false;
  }else{
    for(let i = 0; i < array1.length; i++){
      if(array1[i] !== array2[i]){
        return false;
      }
    }
  }
  return true;
};

const assertArraysEqual =  function(array1, array2){
  let bool = eqArrays(array1, array2);
  if(bool){
    console.log(`✅Assertion Passed: [${array1}] === [${array2}]`);
  }else{
    console.log(`⛔Assertion Failed: [${array1}] !== [${array2}]`);
  }
}

const map = function(array, callback){
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);

const words2 = [];
const results2 = map(words2, word => word[0]);
assertArraysEqual(results2, []);

const words3 = ["3"];
const results3 = map(words3, word => word[0]);
assertArraysEqual(results3, ["3"]);