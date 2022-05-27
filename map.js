

const assertArraysEqual = function(actual, expected) {
  // console assert + compare actual and expect to determin if they are the same
  //passing actual and expected into the eqArrays function
  if (eqArrays(actual, expected)) {
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

// map function will take in two arguments : an array to map, and a callback function
// the map function will return a new array based on the results of the callback function.

const words = ["ground", "control", "to", "major", "tom"];
const numbers = [1, 2, 3, 4, 5];
const sayings = ['yeehaw', 'giddy up', 'howdy'];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
// prints 1st letter of each word
const results1 = map(words, word => word[0]);
// adds 1 to each number and prints new total
const results2 = map(numbers, num => num += 1);
// adds "partner!" to the end of each saying
const results3 = map(sayings, say => say + ' partner!');
console.log(results3);

// compares the results assertArraysEqual and the 3 results variables above
assertArraysEqual(results1,[ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results2, [ 2, 3, 4, 5, 6 ]);
assertArraysEqual(results3, [ 'yeehaw partner!', 'giddy up partner!', 'howdy partner!' ]);
