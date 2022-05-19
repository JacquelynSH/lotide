const assertEqual = function(actual, expected) {
// console assert + compare actual and expect to determin if they are the same
// console.assert(actual !== expected)
  if (actual !== expected) {
    console.log('🐙🐡🐬' + " Assertion Passed!");
  } else {
    console.log('👻👻👻' + " Assertion Failed OH NO");
  }


};
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);