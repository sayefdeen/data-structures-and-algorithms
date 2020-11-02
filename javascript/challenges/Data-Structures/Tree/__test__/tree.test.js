const BinaryTree = require("../lib/tree");
const Node = require("../lib/node");

describe("Binary Tree Tests", () => {
  let tree;
  beforeAll(() => {
    let one = new Node(1);
    let two = new Node(2);
    let three = new Node(3);
    let four = new Node(4);
    let five = new Node(5);
    one.left = two;
    one.right = three;
    two.left = four;
    two.right = five;
    tree = new BinaryTree(one);
  });

  it("preOrder", () => {
    const expectedOutPut = [1, 2, 4, 5, 3];
    const preOrder = tree.preOrder();
    expect(preOrder).toEqual(expectedOutPut);
  });
  it("inOrder", () => {
    const expectedOutPut = [4, 2, 5, 1, 3];
    const preOrder = tree.inOrder();
    expect(preOrder).toEqual(expectedOutPut);
  });
  it("postOrder", () => {
    const expectedOutPut = [4, 5, 2, 3, 1];
    const preOrder = tree.postOrder();
    expect(preOrder).toEqual(expectedOutPut);
  });
  it("should return the maximum value of the tree", () => {
    const maxValue = tree.findMaximumValue();
    expect(maxValue).toEqual(5);
  });
  it("should throw an Error if the tree was empty and findMax was called", () => {
    let newTree = new BinaryTree();
    expect(() => {
      newTree.findMaximumValue();
    }).toThrow("Tree Is Empty");
  });

  it("should handle if the root value was the maximum", () => {
    let one = new Node(1);
    let two = new Node(2);
    let three = new Node(3);
    let four = new Node(4);
    let five = new Node(5);
    one.left = two;
    one.right = three;
    two.left = five;
    two.right = four;
    let newTree = new BinaryTree(one);
    let maximumValue = newTree.findMaximumValue();
    expect(maximumValue).toEqual(5);
  });
});
