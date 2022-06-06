const assertEqual = require('./assertEqual')

  // return the all elements in the array passed index 0
const tail = function(array) {
  if (array.length <= 1) {
    return [];
  }
  // returns array from index 1 on without changing original array.
  return array.slice(1);
};

module.exports = tail;

