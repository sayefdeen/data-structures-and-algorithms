"use strict";

const LinkedList = require("../lib/linked-list");
const llObject = new LinkedList();

// functions

function getLastNode(obj) {
  let currentNode = obj.head;
  while (currentNode.next) {
    currentNode = currentNode.next;
  }
  return currentNode;
}

describe("Linked List Class", () => {
  it("successfully instantiate an empty linked list", () => {
    const llObject = new LinkedList();
    expect(llObject.head).toBeNull();
  });
  it("Can insert into the linked list", () => {
    const llObject = new LinkedList();
    const value = "any value";
    llObject.insert(value);
    expect(llObject.head.value).toEqual(value);
    expect(llObject.head.next).toBeNull();
  });
  it("head property will point at the first node in the linked list", () => {
    const llObject = new LinkedList();
    const value = 55;
    llObject.insert(55);
    expect(llObject.head.value).toEqual(value);
  });
  it("can insert multiple value to linked list", () => {
    const llObject = new LinkedList();
    const val1 = 44;
    const val2 = "some text";
    llObject.insert(44);
    llObject.insert(val2);
    expect(llObject.head.value).toEqual(val1);
    let lastNode = getLastNode(llObject);
    expect(lastNode.next).toBeNull();
  });

  it("will return true when finding a value within the linked list that exists", () => {
    const llObject = new LinkedList();
    let val1 = [44, 55, 66, 77];
    val1.forEach((item) => llObject.insert(item));
    let testValue = 66;
    expect(llObject.includes(testValue)).toBeTruthy();
  });
  it("will return false when finding a value within the linked list that dose not exists", () => {
    const llObject = new LinkedList();
    let val1 = [44, 55, 66, 77];
    val1.forEach((item) => llObject.insert(item));
    let testValue = 88;
    expect(llObject.includes(testValue)).toBeFalsy();
  });

  it("can return collection of all values that in the linked list", () => {
    const llObject = new LinkedList();
    let val1 = [44, 55, 66, 77];
    val1.forEach((item) => llObject.insert(item));
    let output = llObject.toString();
    expect(llObject.toString()).toEqual(output);
  });

  it("toString() will return false if the linked list is empty", () => {
    const llObject = new LinkedList();
    expect(llObject.toString()).toBeFalsy();
  });
});
