/* eslint-disable quotes */
const mergeSort = require("./mergesort");

describe("Insertion Sort Algorithm", () => {
  it("should Sort an array of numbers in Ascending order", () => {
    let array = [8, 4, 23, 42, 16, 15];
    expect(mergeSort(array)).toEqual([4, 8, 15, 16, 23, 42]);
  });

  it("should Sort an array of numbers in Ascending order even if there is negative numbers", () => {
    let array = [8, 4, 23, 42, 16, 15, -5, -14];
    expect(mergeSort(array)).toEqual([-14, -5, 4, 8, 15, 16, 23, 42]);
  });

  it("should Sort an array of numbers in Ascending order even if it is in reversed sorted", () => {
    let array = [20, 18, 12, 8, 5, -2];
    expect(mergeSort(array)).toEqual([-2, 5, 8, 12, 18, 20]);
  });

  it("should Sort an array of numbers in Ascending order even if there is few uniques numbers", () => {
    let array = [5, 12, 7, 5, 5, 7];
    expect(mergeSort(array)).toEqual([5, 5, 5, 7, 7, 12]);
  });

  it("should Sort an array of numbers in Ascending order even if it was nearly sorted", () => {
    let array = [2, 3, 5, 7, 13, 11];
    expect(mergeSort(array)).toEqual([2, 3, 5, 7, 11, 13]);
  });
});
