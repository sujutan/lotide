const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Get every element except the head (first element) of the array.
const tail = function(array) {
  if (array === []) {
    return [];
  } else {
    return array.slice(1);
  }
};

// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"
console.log("-------------------Case 1 End---------------------------");

// Test Case 2: Checked an array with only one element should yield an empty array for its tail
const result2 = tail(["Hello"]);
assertEqual(result2.length, 0); // ensure we get back zero elements
console.log("-------------------Case 2 End---------------------------");

// Test Case 3: Check an empty array should yield an empty array for its tail
const result3 = tail([]);
assertEqual(result3.length, 0); // ensure we get back zero elements
console.log("-------------------Case 3 End---------------------------");

// Test Case 4: Check the original array unchanged
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
console.log("-------------------Case 4 End---------------------------");