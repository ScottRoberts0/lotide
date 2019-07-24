const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔Assertion Failed: ${actual} !== ${expected}`);
  }
};


const eqArrays = function (array1, array2) {
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

const eqObjects = function (object1, object2) {
  const objKeys1 = Object.keys(object1);
  const objKeys2 = Object.keys(object2);

  if (objKeys1.length !== objKeys2.length) {
    return false;
  } else {
  
    
    for (let key of objKeys1) {
      if(!object2[key]){
        return false;
      }
      
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        return eqArrays(object1[key], object2[key]);
      } else {

        if (objKeys1[key] !== objKeys2[key]) {

          return false;
        }
      }
    }
  }
  return true;

};




const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
//eqObjects(ab, ba); 

const abc = { a: "1", b: "2", c: "3" };
//eqObjects(ab, abc);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
//eqObjects(cd, dc); 

const cd2 = { c: "1", d: ["2", 3, 4] };
//eqObjects(cd, cd2);

const bc = { b: "2", c: "1" };



assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);
assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);
assertEqual(eqObjects(ab, bc), false);
