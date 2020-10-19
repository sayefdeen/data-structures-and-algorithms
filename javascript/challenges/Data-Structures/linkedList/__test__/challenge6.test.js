"use strict";

const LinkedList = require("../lib/linked-list");

function getLastNode(obj) {
  let currentNode = obj.head;
  while (currentNode.next) {
    currentNode = currentNode.next;
  }
  return currentNode;
}

function getForAddingPrevious(obj, location) {
  let currentNode = obj.head;
  let required;
  let previous;
  while (currentNode.next) {
    if (currentNode.next.value === location) {
      required = currentNode.next;
      previous = currentNode;
      break;
    }
    currentNode = currentNode.next;
  }
  if (currentNode.value === location) {
    required = currentNode;
  }
  return [required, previous];
}

function getForAddingAfter(obj, location) {
  let currentNode = obj.head;
  let required;
  let after;
  while (currentNode.next) {
    if (currentNode.value === location) {
      required = currentNode.next;
      after = currentNode;
      currentNode = currentNode.next;
      break;
    }
    currentNode = currentNode.next;
  }
  if (currentNode.value === location) {
    required = currentNode.next;
    after = currentNode;
  }
  return [required, after];
}

describe("Code Challenge 6 Tests", () => {
  it("Can successfully add a node to the end of the linked list", () => {
    const ll = new LinkedList();
    const valuesArray = [1, 2, 3, 4, 5];
    valuesArray.forEach((item) => ll.append(item));
    let lastElem = getLastNode(ll);
    expect(lastElem.next).toBeNull();
    expect(lastElem.value).toEqual(valuesArray[valuesArray.length - 1]);
  });

  it("Can successfully insert a node before a node located i the middle of a linked list", () => {
    const ll = new LinkedList();
    const valuesArray = [1, 2, 3, 4, 5];
    valuesArray.forEach((item) => ll.append(item));
    ll.insertBefore(3, 6);
    let elements = getForAddingPrevious(ll, 6);
    expect(elements[0].value).toEqual(6);
    expect(elements[1].value).toEqual(2);
  });
  it("Can successfully insert a node before the first node of a linked list", () => {
    const ll = new LinkedList();
    ll.append(5);
    let firstValue = 1;
    ll.insert(firstValue);
    let currentNode = ll.head;
    expect(currentNode.value).toEqual(firstValue);
    expect(currentNode.next.value).toEqual(5);
    expect(currentNode.next.next).toBeNull();
  });
  it("Can successfully insert after a node in the middle of the linked list", () => {
    const ll = new LinkedList();
    const valuesArray = [1, 2, 3, 4, 5];
    valuesArray.forEach((item) => ll.append(item));
    ll.insertAfter(3, 6);
    let elements = getForAddingAfter(ll, 6);
    expect(elements[0].value).toEqual(4);
    expect(elements[1].value).toEqual(6);
  });

  it("Can successfully insert a node after the last node of the linked list", () => {
    const ll = new LinkedList();
    const firstValue = 1;
    ll.append(firstValue);
    ll.insertAfter(firstValue, 2);
    let element = getForAddingAfter(ll, 2);
    expect(element[0]).toBeNull();
  });
});
