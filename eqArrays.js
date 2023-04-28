// Assertion: check two primitive values are equal
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Check two arrays are equal
const eqArrays = function(array1, array2) {
  // The two arrays have the same length
  if(array1.length === array2.length) {
    if(array1.length === 0){ // Two arrays are empty array
      return true;
    } else { // Check each item of the two arrays
      for(let i = 0; i < array1.length; i++) {
        if(array1[i] !== array2[i]){
          return false;
        }
      }
      return true;
    }
  } else { // The two arrays have different lengths
    return false;
  }
}

// Test Code
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => should PASS

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => should PASS

assertEqual(eqArrays([], []), true); // => should PASS