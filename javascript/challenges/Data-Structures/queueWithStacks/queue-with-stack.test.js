"use strict";

const PseudoQueue = require("./queue-with-stacks");

describe("Name of the group", () => {
  let queue;
  beforeEach(() => {
    queue = new PseudoQueue();
  });

  it("should initialize stack instance in the constructor", () => {
    expect(queue.stack1.top).toBeNull();
  });

  it("should insert a new value into the tail of the queue", () => {
    let testArray = [20, 15, 10];
    testArray.forEach((num) => queue.enqueue(num));
    let insertNumber = 5;
    queue.enqueue(insertNumber);
    expect(queue.stack1.peek()).toEqual(insertNumber);
  });

  it("should remove the head of the queue when calling dequeue ", () => {
    let testArray = [20, 15, 10];
    testArray.forEach((num) => queue.enqueue(num));
    let headValue = queue.dequeue();
    expect(headValue).toEqual(testArray[0]);
  });

  it("should return null if the queue has only one node and dequeue was called", () => {
    queue.enqueue(5);
    let value = queue.dequeue();
    expect(value).toEqual(5);
    expect(() => {
      queue.stack1.peek();
    }).toThrowError("Stack Is Empty");
    expect(queue.stack1.top).toBeNull();
  });

  it("should insert the element at first fif enqueue was called for one node", () => {
    queue.enqueue(5);
    expect(queue.stack1.peek()).toEqual(5);
    expect(queue.stack1.top.next).toBeNull();
  });
});
