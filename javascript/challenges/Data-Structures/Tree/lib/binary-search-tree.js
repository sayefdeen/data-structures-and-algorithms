const Node = require("./node");

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  add(value) {
    const node = new Node(value);
    if (!this.root) {
      this.root = node;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          // Go left
          if (!currentNode.left) {
            currentNode.left = node;
            return this;
          }
          currentNode = currentNode.left;
        } else if (value > currentNode.value) {
          // got right
          if (!currentNode.right) {
            currentNode.right = node;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  contains(value) {
    if (!this.root) {
      return false;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            return false;
          }
          currentNode = currentNode.left;
        } else if (value > currentNode.value) {
          if (!currentNode.right) {
            return false;
          }
          currentNode = currentNode.right;
        } else {
          return true;
        }
      }
    }
  }
}

module.exports = BinarySearchTree;
