"use strict";
const Queue = require("../lib/queue");

describe("Queue Implementation Test", () => {
  let queue;
  beforeEach(() => {
    queue = new Queue();
  });
  it("should create an empty queue", () => {
    expect(queue.front).toBeNull();
  });

  it("Can push multiple values to the queue", () => {
    let testArray = [1, 2, 3];
    testArray.forEach((num) => queue.enqueue(num));
    let node = queue.front;
    while (node.next) {
      node = node.next;
    }
    expect(node.value).toEqual(testArray[testArray.length - 1]);
  });

  it("using peek() should return the value of the front without removing it ", () => {
    let testArray = [1, 2, 3];
    testArray.forEach((num) => queue.enqueue(num));
    let frontValue = queue.peek();
    expect(frontValue).toEqual(testArray[0]);
    expect(queue.length()).toEqual(testArray.length);
  });

  it("using dequeue() should return the value of the front and remove it ", () => {
    let testArray = [1, 2, 3];
    testArray.forEach((num) => queue.enqueue(num));
    let frontValue = queue.dequeue();
    expect(frontValue).toEqual(testArray[0]);
    expect(queue.length()).toEqual(testArray.length - 1);
  });

  it("should Throw an Exceptions in peek/dequeue used", () => {
    expect(() => {
      queue.peek();
    }).toThrow("Queue Is Empty");
    expect(() => {
      queue.dequeue();
    }).toThrow("Queue Is Empty");
  });

  it("should Empty the queue after multiple dequeue() usage", () => {
    let testArray = [1, 2, 3];
    testArray.forEach((num) => queue.enqueue(num));
    testArray.forEach((num) => queue.dequeue());
    expect(queue.front).toBeNull();
  });
});
