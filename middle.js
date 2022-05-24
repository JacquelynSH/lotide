

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  // console assert + compare actual and expect to determin if they are the same
  // console.assert(actual !== expected)
  if (actual === expected) {
    console.log('🐙🐡🐬' + " Assertion Passed!");
  } else {
    console.log('👻👻👻' + " Assertion Failed OH NO");
  }
};

// arrrays with one or two elements, return empty array
// arrays with odd numbver of elemnts, return a single middle array ex [1, 2, 3] --> [3]
// arrrays with even numbers of elements return the two centre elements

const middle = function(array) {

// condition determining if the length of array is 2 or less, return an empty array.
if (array.length <= 2) {
  return [];
}
// declaring variable "index"
// making index equal the length of array divided in half and rounded down.
let index = Math.floor(array.length / 2);

// condition to determin if the length of array is an even number using the modulo operator
if (array.length % 2 === 0){
  // if condition evaluates true.... return
  //
 return [array[index - 1], array[index]];
}
// condition to determin if the length of array is an odd number using the modulo operator
if (array.length % 2 === 1) {
 return array[index];
}
};



// //should return []
console.log(middle([1]));
console.log(middle([1, 2]));
// //should return [2] and [3]
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4, 5]));
//should return [2, 3] and [3, 4]
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6]));

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);


