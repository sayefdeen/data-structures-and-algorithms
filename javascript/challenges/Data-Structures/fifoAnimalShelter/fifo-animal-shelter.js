"use strict";

const Animal = require("./classes/AnimalClass");
const Node = require("../stacksAndQueues/lib/node");

class AnimalShelter {
  constructor() {
    this.top = null;
  }

  enqueue(animal) {
    const node = new Node(animal);
    if (!this.top) {
      this.top = node;
    } else {
      node.next = this.top;
      this.top = node;
    }
    return this;
  }
  dequeue(pref) {
    if (!this.top) {
      throw "The Shelter is Empty";
    } else {
      let required;
      let currentNode = this.top;
      // revers the queue
      let revered = new AnimalShelter();
      while (currentNode) {
        revered.enqueue(currentNode.value);
        currentNode = currentNode.next;
      }
      // search for the longest period animal
      currentNode = revered.top;
      while (currentNode) {
        if (currentNode.value.type == pref) {
          let temp = currentNode.next;
          currentNode.next = null;
          revered.top = temp;
          required = currentNode;
          break;
        }
        currentNode = currentNode.next;
      }
      // revers the array again to return it to original
      this.top = null;
      currentNode = revered.top;
      while (currentNode) {
        this.enqueue(currentNode.value);
        currentNode = currentNode.next;
      }
      return required ? required.value : null;

      // for the stretch goal, just in the else return the top of reversed then remove it from the queue and return the original one
    }
  }
}
module.exports = AnimalShelter;

// let dog1 = new Animal("see", 1, "black", "dog");
// let dog2 = new Animal("samran", 1, "yellow", "dog");
// let dog3 = new Animal("itthatis?", 1, "white", "dog");
// let cat1 = new Animal("saw", 2, "black", "cat");
// let as = new AnimalShelter();
// as.enqueue(dog2);
// as.enqueue(dog1);
// as.enqueue(cat1);
// as.enqueue(dog3);
// console.log(as.dequeue("dog"));
// console.log(as.dequeue("cat"));
