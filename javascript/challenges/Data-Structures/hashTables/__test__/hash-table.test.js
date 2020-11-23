/* eslint-disable quotes */
"use strict";
const LinkedList = require("../../linkedList/lib/linked-list");
const firstRepeatedWord = require("../../repeatedWords/repeated-word");
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
