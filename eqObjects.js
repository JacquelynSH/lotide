const assertEqual = function(actual, expected) {
  // console assert + compare actual and expect to determin if they are the same
  if (actual === expected) {
    console.log('🐙🐡🐬' + " Assertion Passed!");
  } else {
    console.log('👻👻👻' + " Assertion Failed OH NO");
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
};
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  // store object1 and object2 keys in a variable
  let objectKeys1 = Object.keys(object1);
  let objectKeys2 = Object.keys(object2);
  // if lengths of two objects are not the same - return false
  if (objectKeys1.length !== objectKeys2.length) {
    return false;
  }
  // iterate through keys of object1
  for (let key of objectKeys1) {
    // checking for array in object
    if (Array.isArray(object1[key]), Array.isArray(object2[key])) {
      // calling eqArrays to compare the object keys, if they are not arrays, returning false
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
      // checking is obect keys are not equal and returning false
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false
assertEqual(eqObjects(cd, cd2), false); // => false




