"use strict";

const LinkedList = require("../lib/linked-list");

describe("Challenge Number 7", () => {
  it("should return the value of the passed k value", () => {
    const llObject = new LinkedList();
    let testArray = [1, 2, 3, 4, 5];
    testArray.forEach((item) => llObject.append(item));
    let kValue = 0;
    let index = llObject.kthFromEnd(kValue);
    expect(index).toEqual(testArray[testArray.length - kValue - 1]);
  });

  it("should return undefined if the value of the passed k > linkedList length", () => {
    const llObject = new LinkedList();
    let testArray = [1, 2, 3, 4, 5];
    testArray.forEach((item) => llObject.append(item));
    let kValue = 6;
    expect(() => {
      llObject.kthFromEnd(kValue);
    }).toThrow(`Index >  length of LinkedList`);
  });

  it("should return undefined if the value of the passed k < 0", () => {
    const llObject = new LinkedList();
    let testArray = [1, 2, 3, 4, 5];
    testArray.forEach((item) => llObject.append(item));
    let kValue = -1;
    expect(() => {
      llObject.kthFromEnd(kValue);
    }).toThrow(`Can't pass a negative value`);
  });

  it("should return the index if k passed is 0 and linkedList length is equal to 1 ", () => {
    const llObject = new LinkedList();
    let test = 1;
    llObject.append(test);
    let kValue = 0;
    let index = llObject.kthFromEnd(kValue);
    expect(index).toEqual(test);
  });
  it("should return the value of the passed index", () => {
    const llObject = new LinkedList();
    let testArray = [1, 2, 3, 4, 5];
    testArray.forEach((item) => llObject.append(item));
    let kValue = 2;
    let index = llObject.kthFromEnd(kValue);
    expect(index).toEqual(testArray[testArray.length - kValue - 1]);
  });
});
