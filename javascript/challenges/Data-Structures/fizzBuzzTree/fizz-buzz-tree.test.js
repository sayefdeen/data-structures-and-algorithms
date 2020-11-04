"use strict";
const Node = require("../Tree/lib/node");
const BinaryTree = require("../Tree/lib/tree");
const fizzBuzzTree = require("./fizz-buzz-tree");

describe("Fizz Buzz function test", () => {
  let tree;
  beforeAll(() => {
    let one = new Node(1);
    let two = new Node(2);
    let three = new Node(3);
    let four = new Node(15);
    let five = new Node(5);
    one.left = two;
    one.right = three;
    two.left = four;
    two.right = five;
    tree = new BinaryTree(one);
  });

  it("should return a new Tree an all values are strings", () => {
    let newTree = fizzBuzzTree(tree);
    expect(newTree).toBeInstanceOf(BinaryTree);
    expect(typeof newTree.root.value).toBe("string");
  });

  it("should return an array with all the division on 3 is fizz and 5 is buzz", () => {
    let newTree = fizzBuzzTree(tree);
    let expectedResult = ["1", "2", "Fizz", "FizzBuzz", "Buzz"];
    expect(newTree.breadthFirstTraversal(newTree)).toEqual(expectedResult);
  });

  it("should throw an error if fizzBuzzTree method used in an empty array", () => {
    let newTree = new BinaryTree();
    expect(() => {
      fizzBuzzTree(newTree);
    }).toThrow("Tree Is Empty");
  });
});
