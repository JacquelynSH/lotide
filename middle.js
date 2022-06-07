

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
  if (array.length % 2 === 0) {
  // if condition evaluates true.... return
  //
    return [array[index - 1], array[index]];
  }
  // condition to determin if the length of array is an odd number using the modulo operator
  if (array.length % 2 === 1) {
    return array[index];
  }
};


module.exports = middle;

