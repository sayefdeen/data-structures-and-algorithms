/* eslint-disable quotes */
"use strict";

const BinarySearchTree = require("../Tree/lib/binary-search-tree");
const hashMap = require("../hashTables/lib/hashtable");
const treeObj1 = new BinarySearchTree();
const treeObj2 = new BinarySearchTree();

let hashTable;
function tree_intersection(tree1, tree2) {
  hashTable = new hashMap(4000);
  let outputArr = addingTrees(tree1, tree2);
  return outputArr;
}

function addingTrees(tree1, tree2) {
  if (!tree1.root || !tree2.root) {
    return "One of the trees is Empty";
  }
  let array = [];
  let outPut = [];
  array.push(tree1.root);
  array.push(tree2.root);
  while (array.length) {
    let node = array.shift();
    hashTable.addingNumbers(node.value);
    let linkedList = hashTable.storage[node.value];
    if (linkedList.head.next) {
      if (!outPut.includes(node.value)) outPut.push(node.value);
    }
    if (node.left) {
      array.push(node.left);
    }
    if (node.right) {
      array.push(node.right);
    }
  }
  return outPut;
}

// [150, 100, 250, 75, 160, 200, 350, 125, 175, 300, 500].forEach((num) =>
//   treeObj1.add(num)
// );
// [42, 100, 600, 15, 160, 200, 350, 125, 175, 4, 500].forEach((num) =>
//   treeObj2.add(num)
// );

// console.log(tree_intersection(treeObj1, treeObj2));

module.exports = tree_intersection;
