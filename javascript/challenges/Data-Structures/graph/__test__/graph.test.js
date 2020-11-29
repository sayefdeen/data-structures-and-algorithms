/* eslint-disable quotes */
"use strict";

const Graph = require("../lib/graph");
const Vertex = require("../lib/vertex");

describe("Graphs Data Structure", () => {
  describe("Code Challenge 35", () => {
    let graphObj;
    let one;
    let two;
    let three;

    beforeAll(() => {
      graphObj = new Graph();
      one = new Vertex(1);
      two = new Vertex(2);
      three = new Vertex(3);

      graphObj.addVertex(one);
      graphObj.addVertex(two);
      graphObj.addVertex(three);

      graphObj.addEdge(one, two);
      graphObj.addEdge(one, three);
      graphObj.addEdge(two, three);
    });

    it("should Insert a new node to the graph", () => {
      expect(graphObj.adjacentList.has(one)).toBeTruthy();
    });

    it("should Added a new Edge to the graph", () => {
      expect(graphObj.adjacentList.get(two)[0].vertex.value).toEqual(3);
    });

    it("should return collection of all nodes can be properly retrieved from the graph", () => {
      let nodes = graphObj.getNodes();
      expect(nodes.length).toBeTruthy();
    });

    it("should All appropriate neighbors can be retrieved from the graph", () => {
      let neighbors = graphObj.getNeighbors(one);
      expect(neighbors.length).toBeTruthy();
    });

    it("Neighbors are returned with the weight between nodes included", () => {
      let neighbors = graphObj.getNeighbors(one);
      neighbors.forEach((item) => {
        expect(Object.keys(item).includes("weight"));
      });
    });

    it("The proper size is returned, representing the number of nodes in the graph", () => {
      expect(graphObj.size()).toBe(3);
    });

    it("An empty graph properly returns an exception", () => {
      let newObj = new Graph();
      expect(() => {
        let node = new Vertex(5);
        newObj.getNodes(node);
      }).toThrowError("Empty Graph");
    });

    it("cant add edge to a node that is not in the graph", () => {
      let five = new Vertex(5);
      let six = new Vertex(6);

      expect(() => {
        graphObj.addEdge(five, six, 0);
      }).toThrowError("Invalid Vertex");
    });
  });
});
