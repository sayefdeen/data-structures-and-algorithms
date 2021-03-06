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
    } else {
      node.next = this.head;
      this.head = node;
    }
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
    if (index < 0) throw `Can't pass a negative value`;
    let arrayOfValues = [];
    let currentNode = this.head;
    while (currentNode.next) {
      arrayOfValues.push(currentNode.value);
      currentNode = currentNode.next;
    }
    arrayOfValues.push(currentNode.value);
    arrayOfValues.reverse();
    if (index >= arrayOfValues.length) {
      throw "Index >  length of LinkedList";
    }
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
    while (currentNode) {
      counter++;
      currentNode = currentNode.next;
    }
    return counter;
  }
}

function reverse(list) {
  let list2 = new LinkedList();
  let currentNode = list.head;
  while (currentNode) {
    list2.insert(currentNode.value);
    currentNode = currentNode.next;
  }
  return list2.toString();
}

function revers2(list) {
  let curr = list.head;
  let prev = null;
  while (list.head.next) {
    list.head = list.head.next;
    curr.next = prev;
    prev = curr;
    curr = list.head;
  }
  list.head.next = prev;
  return list.toString();
}

// let ll = new LinkedList();
// ll.append(3);
// ll.append(2);
// ll.append(1);
// console.log(ll.toString());
// console.log(revers2(ll));
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
