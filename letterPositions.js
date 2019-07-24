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


const letterPositions = function(sentence){
  const results = {};
  for(let i = 0; i < sentence.length; i++){
    let letter = sentence[i];
    if(results[letter]){
      results[letter].push(i)
    }else{
      results[letter] = [];
      results[letter].push(i); 
    }
  }
  return results;
};


console.log(letterPositions("hello"));
console.log(letterPositions("Yo Yo Yo"));
assertArraysEqual(letterPositions("Yo Yo Yo").Y, [0, 3, 6]);
assertArraysEqual(letterPositions("hello").e, [1]);