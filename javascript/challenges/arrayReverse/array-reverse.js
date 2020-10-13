"use strict";

// Test Arrays Inputes

let testArray1 = [1, 2, 3, 4, 5, 6];
let testArray2 = [89, 2354, 3546, 23, 10, -923, 823, -12];
let testArray3 = [
  2,
  3,
  5,
  7,
  11,
  13,
  17,
  19,
  23,
  29,
  31,
  37,
  41,
  43,
  47,
  53,
  59,
  61,
  67,
  71,
  73,
  79,
  83,
  89,
  97,
  101,
  103,
  107,
  109,
  113,
  127,
  131,
  137,
  139,
  149,
  151,
  157,
  163,
  167,
  173,
  179,
  181,
  191,
  193,
  197,
  199,
];

// Solution Number 1

function reverseArray(array) {
  let reversedArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
  }
  return reversedArray;
}

console.log(reverseArray(testArray1));
// This will out put [6,5,4,3,2,1]
console.log(reverseArray(testArray2));
// This will out put [-12,823,-923,10,23,3546,2354,89];
console.log(reverseArray(testArray3));

// Solution Number 2 using .map method

function reverseArray2(array) {
  return array.map((item, index) => {
    return array[array.length - 1 - index];
  });
}

console.log(reverseArray2(testArray1));
// This will out put [6,5,4,3,2,1]
console.log(reverseArray2(testArray2));
// This will out put [-12,823,-923,10,23,3546,2354,89];
console.log(reverseArray2(testArray3));

// Tests
