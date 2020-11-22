"use strict";
const LinkedList = require("../../linkedList/lib/linked-list");
const HashMap = require("../lib/hashtable");

describe("Hash Table Tests", () => {
  describe("Code Challenge 30", () => {
    let hashMap;
    beforeEach(() => {
      hashMap = new HashMap(4000);
      hashMap.add("name", "saif");
      hashMap.add("one", "1");
      hashMap.add("eno", "2");
    });
    it("should Add a key/value pair to the hashtable", () => {
      console.log(hashMap);
      let value = hashMap.get("name");
      let value1 = hashMap.get("one");
      let value2 = hashMap.get("eno");
      expect(value).toEqual("saif");
      expect(value1).toEqual("1");
      expect(value2).toEqual("2");
    });

    it("should hash method return a number represent the index in the table ", () => {
      const hashKey = hashMap.hash("name");
      expect(typeof hashKey === "number").toBeTruthy();
    });

    it("should return null if the key was not found in the hashTab;e", () => {
      let testValue = hashMap.get("test");
      expect(testValue).toBeNull();
    });
    it("should handle collision with linkedList", () => {
      let hashKey = hashMap.hash("name");
      let testLinkedList = hashMap.storage[hashKey];
      expect(testLinkedList).toBeInstanceOf(LinkedList);
    });
  });
});
