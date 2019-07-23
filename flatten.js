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

const flatten = function(arr){
  let newArr = [];

  for(let i = 0; i < arr.length; i++){
    if(Array.isArray(arr[i])){
      for(let j = 0; j < arr[i].length; j++){
        newArr.push(arr[i][j]);
      }
    }else{
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
