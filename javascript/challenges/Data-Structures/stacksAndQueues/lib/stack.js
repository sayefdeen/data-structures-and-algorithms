"use strict";

const Node = require("./node");

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    const node = new Node(value);
    if (!this.top) {
      this.top = node;
    } else {
      node.next = this.top;
      this.top = node;
    }
    return this;
  }

  pop() {
    if (!this.top) {
      throw "Stack Is Empty";
    } else {
      let temp = this.top.next;
      let removedNode = this.top;
      removedNode.next = null;
      this.top = temp;
      return removedNode.value;
    }
  }

  peek() {
    if (!this.top) {
      throw "Stack Is Empty";
    } else {
      return this.top.value;
    }
  }

  isEmpty() {
    if (!this.top) return true;
    else return false;
  }

  length() {
    let counter = 0;
    if (!this.top) {
      return counter;
    } else {
      let currentNude = this.top;
      while (currentNude) {
        counter++;
        currentNude = currentNude.next;
      }
      return counter;
    }
  }
}

module.exports = Stack;
