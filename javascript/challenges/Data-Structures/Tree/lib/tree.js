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
}

module.exports = BinaryTree;
