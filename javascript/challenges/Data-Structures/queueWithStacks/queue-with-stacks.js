/* eslint-disable quotes */
"use strict";
const Stack = require("../stacksAndQueues/lib/stack");

class PseudoQueue {
  constructor() {
    this.stack1 = new Stack();
  }

  enqueue(value) {
    this.stack1.push(value);
  }
  dequeue() {
    let currentNode = this.stack1.top;
    if (!currentNode.next) {
      this.stack1.top = null;
      return currentNode.value;
    }
    while (currentNode.next.next) {
      currentNode = currentNode.next;
    }
    let requiredNode = currentNode.next;
    currentNode.next = null;
    return requiredNode.value;
  }

  toString() {
    let currentNode = this.stack1.top;
    let outPut = "";
    while (currentNode) {
      outPut += `{${currentNode.value}} -> `;
      currentNode = currentNode.next;
    }
    return outPut;
  }
}

module.exports = PseudoQueue;
