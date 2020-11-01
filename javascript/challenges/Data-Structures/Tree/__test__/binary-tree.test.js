const BinarySearchTree = require("../lib/binary-search-tree");

describe("Binary Search Tree class Tests", () => {
  let newTree;
  beforeAll(() => {
    newTree = new BinarySearchTree();
  });
  it("should create a new instance from Binary Search Tree", () => {
    expect(newTree.root).toBeNull();
    expect(newTree).toBeInstanceOf(BinarySearchTree);
  });

  it("should return false if the tree was empty and contains was used", () => {
    let cond = newTree.contains(5);
    expect(cond).toBeFalsy();
  });

  it("should add a new node to the root if the tree was empty", () => {
    newTree.add(10);
    expect(newTree.root.value).toEqual(10);
    expect(newTree.root.right).toBeNull;
    expect(newTree.root.left).toBeNull;
  });
  it("inserting a value larger than the root value will go to the right", () => {
    newTree.add(15);
    expect(newTree.root.value).toEqual(10);
    expect(newTree.root.right.value).toEqual(15);
    expect(newTree.root.left).toBeNull();
  });

  it("inserting a value less than the root value will go to the left", () => {
    newTree.add(8);
    expect(newTree.root.value).toEqual(10);
    expect(newTree.root.right.value).toEqual(15);
    expect(newTree.root.left.value).toEqual(8);
  });

  it("inserting multiple values will works", () => {
    newTree.add(20);
    newTree.add(9);
    newTree.add(7);
    expect(newTree.root.value).toEqual(10);
    expect(newTree.root.right.right.value).toEqual(20);
    expect(newTree.root.left.right.value).toEqual(9);
    expect(newTree.root.left.left.value).toEqual(7);
  });

  it("should return false if contains been called with a non existing value", () => {
    let cond = newTree.contains(6);
    expect(cond).toBeFalsy();
  });
  it("should return true if contains been called with an existing value", () => {
    let cond = newTree.contains(20);
    expect(cond).toBeTruthy();
  });
});
