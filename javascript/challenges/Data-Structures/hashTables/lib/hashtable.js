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

const hashMap = new HashMap(4000);
// console.log(hashMap.hash('saif'));
hashMap.add("name", "saif");
hashMap.add("one", "thing");
hashMap.add("eno", "1");
hashMap.add("neo", "2");
hashMap.add("this", "nothing");
console.log(hashMap.storage);
// let test = hashMap.storage[hashMap.hash("name")];
// if (test instanceof LinkedList) {
//   console.log(test);
// }
// console.log(hashMap.get("this"));
// console.log(hashMap.contains("name"));

module.exports = HashMap;
