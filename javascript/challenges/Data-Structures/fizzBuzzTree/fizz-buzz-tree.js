"use strict";

const Queue = require("../stacksAndQueues/lib/queue");
const BinaryTree = require("../Tree/lib/tree");

// Just uncomment the array to check the result

function fizzBuzzTree(tree) {
  if (!tree.root) {
    throw "Tree Is Empty";
  } else {
    let newTree = new BinaryTree(tree.root);
    let queue = new Queue();
    //   let results = [];
    queue.enqueue(newTree.root);
    while (!queue.isEmpty()) {
      let node = queue.dequeue();
      node.value = checkDivision(node.value);
      // results.push(node.value);
      if (node.left) {
        queue.enqueue(node.left);
      }
      if (node.right) {
        queue.enqueue(node.right);
      }
    }
    //   console.log(results);
    return newTree;
  }
}

function checkDivision(nodeValue) {
  if (nodeValue % 3 === 0 && nodeValue % 5 === 0) {
    return "FizzBuzz";
  } else if (nodeValue % 3 === 0) {
    return "Fizz";
  } else if (nodeValue % 5 === 0) {
    return "Buzz";
  } else {
    return nodeValue.toString();
  }
}

module.exports = fizzBuzzTree;
