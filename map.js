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

// Assertion: Check two arrays are equal
const assertArraysEqual = function(actual, expected) {
  if(eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
}

// My own version of map
const map = function(array, callback) {
  const results = [];
  for(let item of array) {
    results.push(callback(item));
  }
  return results;
}

// Test cases
const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]); // => ['g', 'c', 't', 'm', 't']
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);

const results2 = map(words, word => word.length); // => [6, 7, 2, 5, 3]
assertArraysEqual(results2, [6, 7, 2, 5, 3]);

const results3 = map(words, word => word.slice(2)); // => ["ound", "ntrol", "", "jor", "m"]
assertArraysEqual(results3, ["ound", "ntrol", "", "jor", "m"]);