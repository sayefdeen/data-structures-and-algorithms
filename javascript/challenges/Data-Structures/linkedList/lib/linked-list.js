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
        // console.log(currentNode);
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
    if (currentNode.value === value) {
      node.next = this.head;
      this.head = node;
    }
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
        currentNode = currentNode.next;
        break;
      }
      currentNode = currentNode.next;
    }
    if (currentNode.value === value) {
      node.next = currentNode.next;
      currentNode.next = node;
    }
  }

  kthFromEnd(index) {
    let arrayOfValues = [];
    let currentNode = this.head;
    while (currentNode.next) {
      arrayOfValues.push(currentNode.value);
      currentNode = currentNode.next;
    }
    arrayOfValues.push(currentNode.value);
    arrayOfValues.reverse();
    return arrayOfValues[index];
  }

  zipLists(list1, list2) {
    let currentNodeList1 = list1.head;
    let currentNodeList2 = list2.head;
    if (!currentNodeList1) {
      this.head = list2.head;
      return this;
    } else if (!currentNodeList2) {
      this.head = list1.head;
      return this;
    }
    while (currentNodeList1.next) {
      list1.insertAfter(currentNodeList1.value, currentNodeList2.value);
      currentNodeList1 = currentNodeList1.next.next;
      currentNodeList2 = currentNodeList2.next;
    }
    if (currentNodeList2) {
      list1.insertAfter(currentNodeList1.value, currentNodeList2.value);
    }
    if (currentNodeList1.next) {
      currentNodeList1.next.next = currentNodeList2.next;
    }
    // console.log(currentNodeList1);
    // console.log(currentNodeList2);
    this.head = list1.head;
    return this;
  }

  getLength(list) {
    let currentNode = list.head;
    let counter = 0;
    if (!currentNode) {
      return counter;
    }
    while (currentNode.next) {
      counter++;
      currentNode = currentNode.next;
    }
    if (currentNode) {
      counter++;
    }
    return counter;
  }
}

// let ll = new LinkedList();
// ll.append(4);
// ll.append(5);
// ll.append(6);
// console.log(ll.getLength(ll));
// let ll2 = new LinkedList();
// ll2.append(7);
// ll2.append(8);
// ll2.append(9);
// ll.zipLists(ll, ll2);
// let ll3 = new LinkedList();
// ll3.zipLists(ll, ll2);
// console.log(ll.toString());
// console.log(ll.kthFromEnd(3));
// ll.testKth(0);
// console.log("before inserting", ll.toString());
// ll.insertBefore(4, 55);
// console.log("after inserting", ll.toString());
// console.log("before", ll.toString());
// ll.insertBefore(4, 66);
// ll.insert(44);
// ll.insert(44);
// ll.insert(44);
// console.log("after", ll.toString());
// console.log("final ll", ll);

module.exports = LinkedList;
