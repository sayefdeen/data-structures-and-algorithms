"use strict";

const Stack = require("../lib/stack");

describe("Stack Implementation Test", () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });

  it("should define an empty stack ", () => {
    expect(stack.top).toBeNull();
  });

  it("should push to the top of the Stack", () => {
    let testArr = [1, 2, 3];
    testArr.forEach((num) => stack.push(num));
    expect(stack.peek()).toEqual(testArr[testArr.length - 1]);
  });

  it("when using peek() the top value should return and the stack should remain the same", () => {
    let testArr = [1, 2, 3];
    testArr.forEach((num) => stack.push(num));
    let value = stack.peek();
    expect(value).toEqual(testArr[testArr.length - 1]);
    expect(stack.length()).toEqual(testArr.length);
  });

  it("when using pop() the top value should return and the stack length will decrease by one", () => {
    let testArr = [1, 2, 3];
    testArr.forEach((num) => stack.push(num));
    let value = stack.pop();
    expect(value).toEqual(testArr[testArr.length - 1]);
    expect(stack.length()).toEqual(testArr.length - 1);
  });

  it("should Throw an exception when using pop()/peek() on an empty stack", () => {
    expect(() => {
      stack.pop();
    }).toThrow("Stack Is Empty");
    expect(() => {
      stack.peek();
    }).toThrow("Stack Is Empty");
  });
});
