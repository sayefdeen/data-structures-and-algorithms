"use strict";
const HashMap = require("../hashTables/lib/hashtable");
const lHashTable = new HashMap(4000);
const rHashTable = new HashMap(4000);

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

  //   console.log(lTable.storage[1900].head.value);
  return output(lHashTable);
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

lHashTable.add("fond", "enamored");
lHashTable.add("wrath", "anger");
lHashTable.add("diligent", "employed");
lHashTable.add("outfit", "garb");
lHashTable.add("guide", "usher");

rHashTable.add("fond", "average");
rHashTable.add("wrath", "delight");
rHashTable.add("diligent", "idle");
rHashTable.add("guide", "follow");
rHashTable.add("flow", "jam");

console.log(leftJoin(lHashTable, rHashTable));

// let keys = Object.keys(
//     hashTable.storage).map((item) => parseInt(item));
// keys.forEach((key) => console.log(hashTable.storage[key]));
// console.log(hashTable.hash("ahmad"));
// console.log(hashTable.storage[1900]);
