const assertEqual = function(actual, expected) {
  // console assert + compare actual and expect to determin if they are the same
  // console.assert(actual !== expected)
  if (actual === expected) {
    console.log('🐙🐡🐬' + " Assertion Passed!");
  } else {
    console.log('👻👻👻' + " Assertion Failed OH NO");
  }
};
  // return the all elements in the array passed index 0
const tail = function(array) {
  if (array.length <= 1) {
    return [];
  }


  // returns array from index 1 on without changing original array.
  return array.slice(1);
};
const result = tail(["Hello", "Lighthouse", "Labs"]);

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);

assertEqual(words.length, 3);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");
assertEqual(tail([1, 2, 3])[0], 2);
assertEqual(tail([1, 2, 3])[1], 3);
assertEqual(tail([1]).length, 0);
assertEqual(tail([]).length, 0);
