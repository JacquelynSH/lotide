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

//functiion will return a "slice of the array" with elements taken from the
// beginning. it should keep going until the callback returns a truthy value.

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const data3 = ["yep", "nope"];

const takeUntil = function(array, callback) {
  // declare variable for result storage
  const results = [];
  // for of loop to loop through the array passed in
  for (let i of array) {
    // condition - if item in array is false - push to results
    if (!callback(i)) {
      results.push(i);
    // else if item in array is true, stop the loop
    } else {
      break;
    }
  }
  return results;
};

const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

console.log('---');

const results3 = takeUntil(data3, x => x.length > 3);
console.log(results3);

console.log('---');

assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2, [ "I've", 'been', 'to', 'Hollywood' ]);
assertArraysEqual(results3, [ 'yep' ]);
