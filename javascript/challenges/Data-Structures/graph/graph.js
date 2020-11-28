"use strict";
const vertex = require("./vertex");

class Graph {
  constructor() {
    this.numberOfNodes = 0;
    // using object instead of an array because when we start to add items/delete item the array will keep shifting the elements
    this.adjacentList = {};
  }

  addVertex(node) {
    this.adjacentList[node] = [];
    this.numberOfNodes++;
  }

  addEdge(node1, node2) {
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
  }

  showConnections() {}
}

module.exports = Graph;
