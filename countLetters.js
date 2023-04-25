// Assert the value is correct
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  let results = {}
  for(letter of sentence) {
    if(letter !== " ") {
      if(results[letter]){
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }
  return results;
}

// Test cases
const result1 = countLetters("lighthouse in the house");

assertEqual(result1["i"], 2);
assertEqual(result1["h"], 4);
assertEqual(result1["a"], undefined);
assertEqual(result1[" "], undefined);