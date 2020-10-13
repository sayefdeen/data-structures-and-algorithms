let testArray1 = [2, 4, 6, 8];
let testNumber1 = 5;
let testArray2 = [4, 8, 15, 23, 42];
let testNumber2 = 16;

// Solution Number 1

function insertShiftArray(arr, num) {
  let middleIndex = Math.ceil(arr.length / 2);
  let newArr = [];
  arr.forEach((val, index) => {
    newArr.push(val);
    if (index === middleIndex) {
      newArr.splice(middleIndex, 0, num);
    }
  });
  return newArr;
}

console.log(insertShiftArray(testArray1, testNumber1));
// This will returns = [2,4,5,6,8]
console.log(insertShiftArray(testArray2, testNumber2));
// This will returns = [4,8,15,16,23,42]

// Solution Number 2

function insertShiftArray1([...arr], num) {
  let middleIndex = Math.ceil(arr.length / 2);
  arr.splice(middleIndex, 0, num);
  return arr;
}

console.log(insertShiftArray1(testArray1, testNumber1));
// This will returns = [2,4,5,6,8]
console.log(insertShiftArray1(testArray2, testNumber2));
// This will returns = [4,8,15,16,23,42]

// Tests

describe("Name of the group", () => {
  describe("Test Function 1", () => {
    it("return a new array inserting the new number into the middle", () => {
      expect(insertShiftArray([2, 4, 6, 8], 5)).toStrictEqual([2, 4, 5, 6, 8]);
    });
    it("return a new array inserting the new number into the middle", () => {
      expect(insertShiftArray([4, 8, 15, 23, 42], 16)).toStrictEqual([
        4,
        8,
        15,
        16,
        23,
        42,
      ]);
    });
  });

  describe("Test Function 2", () => {
    it("return a new array inserting the new number into the middle", () => {
      expect(insertShiftArray1([2, 4, 6, 8], 5)).toStrictEqual([2, 4, 5, 6, 8]);
    });

    it("return a new array inserting the new number into the middle", () => {
      expect(insertShiftArray1([4, 8, 15, 23, 42], 16)).toStrictEqual([
        4,
        8,
        15,
        16,
        23,
        42,
      ]);
    });
  });
});
