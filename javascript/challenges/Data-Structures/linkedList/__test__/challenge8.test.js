"use strict";

const LinkedList = require("../lib/linked-list");

describe("Code Challenge Number 8", () => {
  it("if the length of both linked lists are equal", () => {
    const llObject1 = new LinkedList();
    [1, 2, 3].forEach((num) => llObject1.append(num));
    let lengthBefore = llObject1.getLength(llObject1);
    const llObject2 = new LinkedList();
    [5, 6, 7].forEach((num) => llObject2.append(num));
    llObject1.zipLists(llObject1, llObject2);
    let lengthAfter = llObject1.getLength(llObject1);
    expect(lengthBefore).toEqual(3);
    expect(lengthAfter).toEqual(6);
  });

  it("if the length of the first linked list is less that the second one", () => {
    const llObject1 = new LinkedList();
    [1, 2].forEach((num) => llObject1.append(num));
    let lengthBefore = llObject1.getLength(llObject1);
    const llObject2 = new LinkedList();
    [5, 6, 7].forEach((num) => llObject2.append(num));
    llObject1.zipLists(llObject1, llObject2);
    let lengthAfter = llObject1.getLength(llObject1);
    expect(lengthBefore).toEqual(2);
    expect(lengthAfter).toEqual(5);
  });

  it("if the length of the second linked list is less that the first one", () => {
    const llObject1 = new LinkedList();
    [1, 2, 5].forEach((num) => llObject1.append(num));
    let lengthBefore = llObject1.getLength(llObject1);
    const llObject2 = new LinkedList();
    [5, 6].forEach((num) => llObject2.append(num));
    llObject1.zipLists(llObject1, llObject2);
    let lengthAfter = llObject1.getLength(llObject1);
    expect(lengthBefore).toEqual(3);
    expect(lengthAfter).toEqual(5);
  });

  it("should works even if the first linked list is empty", () => {
    const llObject1 = new LinkedList();
    let lengthBefore = llObject1.getLength(llObject1);
    const llObject2 = new LinkedList();
    [5, 6].forEach((num) => llObject2.append(num));
    llObject1.zipLists(llObject1, llObject2);
    let lengthAfter = llObject1.getLength(llObject1);
    expect(lengthBefore).toEqual(0);
    expect(lengthAfter).toEqual(2);
  });

  it("should works even if the second linked list is empty", () => {
    const llObject1 = new LinkedList();
    [5, 6, 7].forEach((num) => llObject1.append(num));
    let lengthBefore = llObject1.getLength(llObject1);
    const llObject2 = new LinkedList();
    llObject1.zipLists(llObject1, llObject2);
    let lengthAfter = llObject1.getLength(llObject1);
    expect(lengthBefore).toEqual(3);
    expect(lengthAfter).toEqual(3);
  });
});
