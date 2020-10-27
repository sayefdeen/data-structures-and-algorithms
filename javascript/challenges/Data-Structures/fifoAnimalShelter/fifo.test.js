"use strict";

const Animal = require("./classes/AnimalClass");
const AnimalShelter = require("./fifo-animal-shelter");

describe("Fifo Animal Shelter queue", () => {
  let as;
  beforeEach(() => {
    as = new AnimalShelter();
  });

  it("should Implement an empty Shelter", () => {
    expect(as.top).toBeNull();
  });

  it("can insert multiple objects into the queue ", () => {
    let dog1 = new Animal("samran", 1, "yellow", "dog");
    let dog2 = new Animal("itthatis?", 1, "white", "dog");
    let cat1 = new Animal("saw", 2, "black", "cat");
    [dog1, dog2, cat1].forEach((obj) => as.enqueue(obj));
    expect(as.top.value).toBe(cat1);
  });

  it("should return the first dog/cat that was entered the shelter", () => {
    let dog1 = new Animal("samran", 1, "yellow", "dog");
    let dog2 = new Animal("itthatis?", 1, "white", "dog");
    let cat1 = new Animal("saw", 2, "black", "cat");
    [dog1, dog2, cat1].forEach((obj) => as.enqueue(obj));
    expect(as.dequeue("dog")).toBe(dog1);
  });

  it("should return null if the preferred animal was not specified ", () => {
    let dog1 = new Animal("samran", 1, "yellow", "dog");
    let dog2 = new Animal("itthatis?", 1, "white", "dog");
    let cat1 = new Animal("saw", 2, "black", "cat");
    [dog1, dog2, cat1].forEach((obj) => as.enqueue(obj));
    expect(as.dequeue("camel")).toBeNull();
  });

  it("should Throw an error if dequeue was called and the queue was empty ", () => {
    expect(() => {
      as.dequeue("dog");
    }).toThrow("The Shelter is Empty");
  });
});
