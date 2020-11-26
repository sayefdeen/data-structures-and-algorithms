"use strict";

function leftJoin(lTable, rTable) {
  let rTableKeys = Object.keys(rTable.storage).map((item) => parseInt(item));
  rTableKeys.forEach((key) => {
    let lLinkedList = lTable.storage[key];
    if (lLinkedList) {
      let rLinkedList = rTable.storage[key];
      let currentNode = rLinkedList.head;
      while (currentNode) {
        lLinkedList.append(currentNode.value);
        currentNode = currentNode.next;
      }
    }
  });

  return output(lTable);
}
function output(hashTable) {
  let keys = Object.keys(hashTable.storage).map((key) => parseInt(key));
  let output = [];
  keys.forEach((key) => {
    let tempArr = [];
    let currentNode = hashTable.storage[key].head;
    let objKey = Object.keys(currentNode.value)[0];
    tempArr.push(objKey);
    while (currentNode) {
      tempArr.push(currentNode.value[objKey]);
      if (currentNode.next) {
        let nextKey = Object.keys(currentNode.next.value)[0];
        if (objKey !== nextKey) {
          output.push([...tempArr, "NULL"]);
          objKey = nextKey;
          tempArr = [];
          tempArr.push(objKey);
        }
      }
      currentNode = currentNode.next;
    }
    output.push(tempArr);
  });
  return output;
}

module.exports = leftJoin;
