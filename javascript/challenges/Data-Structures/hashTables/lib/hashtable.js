"use strict";
const LinkedList = require("../../linkedList/lib/linked-list");

class HashMap {
  constructor(size) {
    this.size = size;
    this.storage = new Array(size);
  }

  hash(key) {
    const sumCharCode = key.split("").reduce((acc, char) => {
      return (acc = char.charCodeAt(0));
    }, 0);
    const hashKey = (sumCharCode * 19) % this.size;
    return hashKey;
  }

  add(key, value) {
    const hashKey = this.hash(key);
    if (!this.storage[hashKey]) {
      const listObj = new LinkedList();
      listObj.insert({ [key]: value });
      this.storage[hashKey] = listObj;
    } else {
      this.storage[hashKey].insert({ [key]: value });
    }
  }

  addingNumbers(key, value) {
    if (!this.storage[key]) {
      const listObj = new LinkedList();
      listObj.insert({ [key]: value });
      this.storage[key] = listObj;
    } else {
      this.storage[key].insert({ [key]: value });
    }
  }

  get(key) {
    const hashKey = this.hash(key);
    const storageEle = this.storage[hashKey];
    if (storageEle) {
      let currentNode = storageEle.head;
      while (currentNode) {
        if (key in currentNode.value) {
          return currentNode.value[key];
        }
        currentNode = currentNode.next;
      }
    }
    return null;
  }

  contains(key) {
    const isFound = this.get(key);
    if (isFound) {
      return false;
    } else {
      return true;
    }
  }
}

module.exports = HashMap;
