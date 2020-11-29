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

  breadthFirst(startingNode) {}

  print() {
    let output = [];
    for (const [vertex, edge] of this.adjacentList.entries()) {
      if (!output.includes(vertex.value)) {
        output.push(vertex.value);
      }
      for (const edges in edge) {
        if (!output.includes(edge[edges].vertex.value)) {
          output.push(edge[edges].vertex.value);
        }
      }
    }
    console.log(output);
  }
}

const graph = new Graph();

const pandora = new Vertex("Pandora");
const monstroplolis = new Vertex("Monstroplolis");
const narnia = new Vertex("Narnia");
const naboo = new Vertex("Naboo");
const metroville = new Vertex("metroville");
const arendelle = new Vertex("Arendelle");

graph.addVertex(pandora);
graph.addVertex(arendelle);
graph.addVertex(metroville);
graph.addVertex(monstroplolis);
graph.addVertex(narnia);
graph.addVertex(naboo);

graph.addEdge(pandora, arendelle);
graph.addEdge(arendelle, pandora);

graph.addEdge(arendelle, metroville);
graph.addEdge(metroville, arendelle);
graph.addEdge(metroville, naboo);
graph.addEdge(arendelle, monstroplolis);
graph.addEdge(monstroplolis, arendelle);

graph.addEdge(metroville, monstroplolis);
graph.addEdge(monstroplolis, metroville);
graph.addEdge(monstroplolis, naboo);
graph.addEdge(metroville, narnia);
graph.addEdge(narnia, metroville);

graph.addEdge(narnia, naboo);
graph.addEdge(naboo, narnia);

graph.addEdge(naboo, monstroplolis);
graph.addEdge(naboo, metroville);

// graph.print();
graph.breadthFirst(pandora);

module.exports = Graph;
