"use strict";

const HashTable = require("../hashTables/lib/hashtable");
let hashTableObj;
function firstRepeatedWord(sentence) {
  hashTableObj = new HashTable(4000);
  let divided = divideAndFilter(sentence);
  let index = 0;
  while (divided.length) {
    let word = divided.shift().toLowerCase().replace(",", "");
    hashTableObj.add(word, index);
    if (isRepeated(word)) {
      return word;
    }
    index++;
  }
}

function divideAndFilter(word) {
  return word.split(" ").filter((word) => word !== " ");
}

function isRepeated(word) {
  let hashKey = hashTableObj.hash(word);
  let indexEle = hashTableObj.storage[hashKey];
  if (indexEle.head.next) {
    if (looping(indexEle, word) >= 2) {
      return true;
    }
  }
}

function looping(list, word) {
  let count = 0;
  let currentNode = list.head;
  while (currentNode) {
    if (word in currentNode.value) {
      count++;
    }
    currentNode = currentNode.next;
  }
  return count;
}

module.exports = firstRepeatedWord;
