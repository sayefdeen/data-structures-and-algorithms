/* eslint-disable quotes */
const BinarySearchTree = require("./binary-search-tree");
const Queue = require("../../stacksAndQueues/lib/queue");
const Node = require("./node");

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  //   Root -> Left -> right
  preOrder() {
    const results = [];
    const _walk = (node) => {
      results.push(node.value);
      if (node.left) {
        _walk(node.left);
      }
      if (node.right) {
        _walk(node.right);
      }
    };

    _walk(this.root);

    return results;
  }
  //   Left -> Root -> Right
  inOrder() {
    const results = [];
    const _walk = (node) => {
      if (node.left) {
        _walk(node.left);
      }
      results.push(node.value);
      if (node.right) {
        _walk(node.right);
      }
    };

    _walk(this.root);

    return results;
  }
  //   Left -> Right -> Root
  postOrder() {
    const results = [];
    const _walk = (node) => {
      if (node.left) {
        _walk(node.left);
      }
      if (node.right) {
        _walk(node.right);
      }
      results.push(node.value);
    };

    _walk(this.root);

    return results;
  }
  findMaximumValue() {
    if (!this.root) {
      throw "Tree Is Empty";
    }
    let bst = new BinarySearchTree();
    const _walk = (node) => {
      if (node.left) {
        _walk(node.left);
      }
      if (node.right) {
        _walk(node.right);
      }
      bst.add(node.value);
    };

    _walk(this.root);
    let currentNode = bst.root;
    if (!currentNode.right) {
      return currentNode.value;
    }
    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.value;
  }
  breadthFirstTraversal(tree) {
    if (!tree.root) {
      throw "Tree Is Empty";
    } else {
      let results = [];
      let queue = new Queue();
      queue.enqueue(tree.root);
      while (!queue.isEmpty()) {
        let node = queue.dequeue();
        results.push(node.value);
        if (node.left) {
          queue.enqueue(node.left);
        }
        if (node.right) {
          queue.enqueue(node.right);
        }
      }
      return results;
    }
  }
  isNumberOfFilesEqul(tree1, tree2) {
    if (!tree1 || !tree2) {
      throw "One of the trees is undefined";
    }
    if (!tree1.root || !tree2.root) {
      throw "One of the trees is Empty";
    }
    let counter = 0;
    let array = [];
    array.push(tree1.root);
    array.push(tree2.root);
    while (array.length) {
      let node = array.shift();
      if (node.value.toLowerCase() === "file") {
        counter++;
      }
      if (node.left) {
        array.push(node.left);
      }
      if (node.right) {
        array.push(node.right);
      }
    }
    return counter % 2 === 0;
  }
}
let one = new Node("folder");
let two = new Node("folder");
let three = new Node("file");
let four = new Node("file");
let five = new Node("file");
one.left = two;
one.right = three;
two.left = four;
two.right = five;
let tree = new BinaryTree(one);

let one1 = new Node("folder");
let two1 = new Node("folder");
let three1 = new Node("folder");
let four1 = new Node("file");
let five1 = new Node("file");
let six1 = new Node("file");
one1.left = two1;
one1.right = three1;
two1.left = four1;
two1.right = five1;
three1.left = six1;
let tree1 = new BinaryTree(one1);

console.log(tree.isNumberOfFilesEqul(tree, tree1));

module.exports = BinaryTree;
