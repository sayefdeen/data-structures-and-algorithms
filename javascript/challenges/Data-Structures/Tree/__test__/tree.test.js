const BinaryTree = require("../lib/tree");
const Node = require("../lib/node");

describe("Binary Tree Tests", () => {
  let tree;
  beforeAll(() => {
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    const four = new Node(4);
    const five = new Node(5);
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
});
