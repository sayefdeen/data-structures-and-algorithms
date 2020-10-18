/* eslint-disable quotes */
"use strict";

const Node = require("./node");

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(val) {
    const node = new Node(val);
    node.next = this.head;
    this.head = node;
  }

  append(val) {
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
  insertBefore(value, newVal) {
    const node = new Node(newVal);
    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        node.next = currentNode.next;
        currentNode.next = node;
        break;
      }
      currentNode = currentNode.next;
    }
    if (currentNode.value === value) {
      this.head = node;
      node.next = currentNode;
    }
  }

  insertAfter(value, newVal) {
    const node = new Node(newVal);
    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.value === value) {
        node.next = currentNode.next;
        currentNode.next = node;
        break;
      }
      currentNode = currentNode.next;
    }
    if (currentNode.value === value) {
      node.next = currentNode.next;
      currentNode.next = node;
    }
  }
}

// let ll = new LinkedList();
// ll.append(4);
// ll.append(5);
// console.log("before inserting", ll.toString());
// ll.insertAfter(4, 55);
// console.log("after inserting", ll.toString());
// console.log("before", ll.toString());
// ll.insertBefore(4, 66);
// ll.insert(44);
// ll.insert(44);
// ll.insert(44);
// console.log("after", ll.toString());
// console.log("final ll", ll);

module.exports = LinkedList;
