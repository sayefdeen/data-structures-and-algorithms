"use strict";
const Node = require("./node");

class Queue {
  constructor() {
    this.front = null;
  }

  enqueue(value) {
    const node = new Node(value);
    if (!this.front) {
      this.front = node;
    } else {
      let currentNode = this.front;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    return this;
  }

  dequeue() {
    if (!this.front) {
      throw "Queue Is Empty";
    } else {
      let temp = this.front.next;
      let removedNode = this.front.value;
      this.front.next = null;
      this.front = temp;
      return removedNode;
    }
  }

  peek() {
    if (!this.front) {
      throw "Queue Is Empty";
    } else {
      return this.front.value;
    }
  }

  isEmpty() {
    if (!this.front) return true;
    else return false;
  }

  length() {
    let counter = 0;
    if (!this.front) {
      return counter;
    } else {
      let currentNude = this.front;
      while (currentNude) {
        counter++;
        currentNude = currentNude.next;
      }
      return counter;
    }
  }
}

module.exports = Queue;
