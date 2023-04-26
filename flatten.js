// Check if two arrays are equal
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

// Assertion function
const assertArraysEqual = function(array1, array2) {
  if(eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${array1} !== ${array2}`);
  }
}

const flatten = function(array) {
  let result = [];
  for(item of array) {
    if(Array.isArray(item)) {
      for(subItem of item){
        result.push(subItem);
      }
    } else {
      result.push(item);
    }
  }
  return result;
}

// Test cases
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // => [1, 2, 3, 4, 5, 6]