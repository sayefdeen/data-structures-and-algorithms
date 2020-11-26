/* eslint-disable quotes */
"use strict";
const leftJoin = require("../../leftJoin/left-join");
const LinkedList = require("../../linkedList/lib/linked-list");
const firstRepeatedWord = require("../../repeatedWords/repeated-word");
const BinarySearchTree = require("../../Tree/lib/binary-search-tree");
const tree_intersection = require("../../treeIntersection/intersection");
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

  describe("Code Challenge 31 Repeated Word", () => {
    it("should return the word (a) from this test case ", () => {
      let testSent = "Once upon a time, there was a brave princess who...";
      expect(firstRepeatedWord(testSent)).toBe("a");
    });
    it("should return the word (it) from this test case ", () => {
      let testSent =
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...";
      expect(firstRepeatedWord(testSent)).toBe("it");
    });

    it("should return the word (summer) from this test case ", () => {
      let testSent =
        "It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...";
      expect(firstRepeatedWord(testSent)).toBe("summer");
    });
  });

  describe("Code Challenge 32 tree_intersection", () => {
    let treeObj1;
    let treeObj2;
    beforeEach(() => {
      treeObj1 = new BinarySearchTree();
      treeObj2 = new BinarySearchTree();
    });
    it("should return the intersection values in two trees", () => {
      [150, 100, 250, 75, 160, 200, 350, 125, 175, 300, 500].forEach((num) =>
        treeObj1.add(num)
      );
      [42, 100, 600, 15, 160, 200, 350, 125, 175, 4, 500].forEach((num) =>
        treeObj2.add(num)
      );

      let output = tree_intersection(treeObj1, treeObj2);
      expect(output).toEqual([100, 160, 125, 200, 175, 350, 500]);
    });

    it("should return an empty array if there is no intersection", () => {
      [150, 250, 75, 300, 652, 789, 251].forEach((num) => treeObj1.add(num));
      [42, 600, 15, 4, 1, 536, 864, 456].forEach((num) => treeObj2.add(num));

      let output = tree_intersection(treeObj1, treeObj2);
      expect(output).toEqual([]);
    });

    it("should return a statement if one of the trees is empty", () => {
      [150, 250, 75, 300, 652, 789, 251].forEach((num) => treeObj1.add(num));
      let output = tree_intersection(treeObj1, treeObj2);
      expect(output).toEqual("One of the trees is Empty");
    });
    it("should return a statement if both of the trees are empty", () => {
      let output = tree_intersection(treeObj1, treeObj2);
      expect(output).toEqual("One of the trees is Empty");
    });
  });

  describe("Code Challenge 33 Test Cases", () => {
    it("should Left Join two hashMaps", () => {
      const lHashTable = new HashMap(4000);
      const rHashTable = new HashMap(4000);
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
      let output = leftJoin(lHashTable, rHashTable);
      expect(output).toEqual([
        ["fond", "enamored", "average"],
        ["guide", "usher", "follow"],
        ["wrath", "anger", "delight"],
        ["outfit", "garb", "NULL"],
        ["diligent", "employed", "idle"],
      ]);
    });
  });
});
