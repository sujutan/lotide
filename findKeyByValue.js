// Assert the value is correct
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

/**
 * 
 * @param {*} source - object
 * @param {*} target
 * @returns - the frist key which contains the given value. 
 * If no key with that given value is found, return undefined.
 */
const findKeyByValue = function(source, target) {
  for(item in source) {
    if(source[item] === target) {
      return item;
    }
  }
  return undefined;
}

// Test cases
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, 2), undefined);