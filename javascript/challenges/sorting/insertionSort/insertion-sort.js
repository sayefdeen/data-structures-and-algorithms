/* eslint-disable quotes */
"use strict";

const insertionSort = (array) => {
  const n = array.length;
  for (let i = 0; i < n - 1; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    let temp = array[min];
    array[min] = array[i];
    array[i] = temp;
  }
  return array;
};

module.exports = insertionSort;
