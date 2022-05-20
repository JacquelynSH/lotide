const assertEqual = function(actual, expected) {
  // console assert + compare actual and expect to determin if they are the same
  // console.assert(actual !== expected)
  const pass = "Assertion Passed!";
  const fail = "Assertion Failed OH NO"
    if (actual !== expected) {
      console.log(`🐙🐡🐬 ${pass}`);
    } else {
      console.log(`👻👻👻 ${fail}`);
    }
  };
  assertEqual("Lighthouse Labs", "Bootcamp");
  assertEqual(1, 1);