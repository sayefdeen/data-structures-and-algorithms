/* eslint-disable quotes */
"use strict";

const Node = require("./node");

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      return this;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    return this;
  }

  includes(searchedVal) {
    let currentNode = this.head;
    // This will stop when we get the last node since it's next in null
    while (currentNode.next) {
      if (currentNode.value === searchedVal) {
        return true;
      }
      currentNode = currentNode.next;
    }
    // This will check the last element of the licked list
    if (currentNode.value === searchedVal) return true;
    return false;
  }

  toString() {
    let output = "";
    let currentNode = this.head;
    if (currentNode) {
      while (currentNode.next) {
        output += ` {${currentNode.value}}-> `;
        currentNode = currentNode.next;
      }
      return output.concat(` {${currentNode.value}}-> Null`);
    }
    return output;
  }
}

const ll = new LinkedList();
// ll.insert(4);
// ll.insert(55);
// ll.insert(44);
// ll.insert(44);
// ll.insert(44);
console.log(Boolean(ll.toString()));
// console.log("include method", ll.includes(44));

module.exports = LinkedList;
