//create a function called head which returns the first item in the array.
//the head function should not return the first element as an array.
// it should simply return itself
//


const assertEqual = function(actual, expected) {
  // console assert + compare actual and expect to determin if they are the same
  // console.assert(actual !== expected)
    if (actual === expected) {
      console.log('🐙🐡🐬' + " Assertion Passed!");
    } else {
      console.log('👻👻👻' + " Assertion Failed OH NO");
    }
  };
  // the first element of an array is often called the head *note for me*
  //create a head function that returns the 1st element in each array
const head = function(array){
  // return index 0 from the array passed to array
  return array[0];
  // all should return assertion passed!
  };

 assertEqual(head([5,6,7]), 5);
 assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
 assertEqual(head([2]), 2);
 assertEqual(head([]), undefined);