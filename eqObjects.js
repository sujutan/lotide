// Assertion: check two primitive values are equal
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Assertion: check two arrays are equal
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

// Assertion: check two objects are equal
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const keysObject1 = Object.keys(object1).sort(); // Key array of object1
  const keysObject2 = Object.keys(object2).sort(); // Key array of object2
  if(!eqArrays(keysObject1, keysObject2)) { // Two objects have different keys
    return false;
  } else {
    for(key in object1) { // Check the values for each key in two objects are same
      if(Array.isArray(object1[key])) { // The value for the key is an array
        if(!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else { // The value for the key is primitive
        if(object1[key] !== object2[key]) {
          return false;
        }
      }
    }
    return true;
  }
};

// Test cases
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject , anotherShirtObject), true); // => true

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false); // => false

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true); // => true

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false); // => false