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
    console.log(`✅Assertion Passed: ${array1} === ${array2}`);
  }else{
    console.log(`⛔Assertion Failed: ${array1} !== ${array2}`);
  }
}


let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
let arr3 = [0];

assertArraysEqual(arr1, arr2);
assertArraysEqual(arr1, arr3);


