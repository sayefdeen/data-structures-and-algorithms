"use strict";

const Edge = require("./edge");
const Vertex = require("./vertex");
const Queue = require("../../stacksAndQueues/lib/queue");

class Graph {
  constructor() {
    this.adjacentList = new Map();
  }

  addVertex(node) {
    this.adjacentList.set(node, []);
  }

  addEdge(start, end, weight = 0) {
    if (!this.adjacentList.has(start) || !this.adjacentList.has(end)) {
      throw new Error("Invalid Vertex");
    } else {
      const list = this.adjacentList.get(start);
      list.push(new Edge(end, weight));
    }
  }

  getNodes() {
    if (this.adjacentList.size) {
      let nodesArray = [];
      for (const [vertex] of this.adjacentList.entries()) {
        nodesArray.push(vertex.value);
      }
      return nodesArray;
    } else {
      throw new Error("Empty Graph");
    }
  }

  getNeighbors(vertex) {
    if (!this.adjacentList.has(vertex)) {
      throw new Error(`not included in the Graph`);
    } else {
      //   let edges = [];
      return this.adjacentList.get(vertex).map((edge) => {
        return {
          edge: edge.vertex.value,
          weight: edge.weight,
        };
      });
    }
  }

  size() {
    return this.adjacentList.size;
  }

  breadthFirst(startingNode) {
    const queue = new Queue();
    const vertexesArray = [];
    queue.enqueue(startingNode);
    vertexesArray.push(startingNode.value);
    while (queue.length()) {
      let node = queue.dequeue();
      let vertexEdges = this.adjacentList.get(node);
      if (vertexEdges.length) {
        for (let index = 0; index < vertexEdges.length; index++) {
          if (!vertexesArray.includes(vertexEdges[index].vertex.value)) {
            queue.enqueue(vertexEdges[index].vertex);
            vertexesArray.push(vertexEdges[index].vertex.value);
          }
        }
      }
    }
    return vertexesArray;
  }
}

module.exports = Graph;
