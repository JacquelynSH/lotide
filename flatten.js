const assertArraysEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log('🐙🐡🐬' + " Assertion Passed!");
  } else {
    console.log('👻👻👻' + " Assertion Failed OH NO");
  }
};

// flattening an array reduces the number of dimensions. turning a nested array into an array of strings?
// flatten function should take in the given elements and flattened version them
const flatten = function(elements) {
//to see if element is an array - will return true or false
  console.log(Array.isArray(elements));
  let newArray = elements.flat();
  // newArray = newArray.concat(elements);
  return newArray;
};


console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), true);