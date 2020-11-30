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

  describe("Code Challenge 36 BFS", () => {
    let graphObj;
    let pandora;
    let monstroplolis;
    let narnia;
    let naboo;
    let metroville;
    let arendelle;
    beforeAll(() => {
      graphObj = new Graph();
      pandora = new Vertex("Pandora");
      monstroplolis = new Vertex("Monstroplolis");
      narnia = new Vertex("Narnia");
      naboo = new Vertex("Naboo");
      metroville = new Vertex("metroville");
      arendelle = new Vertex("Arendelle");

      graphObj.addVertex(pandora);
      graphObj.addVertex(arendelle);
      graphObj.addVertex(metroville);
      graphObj.addVertex(monstroplolis);
      graphObj.addVertex(narnia);
      graphObj.addVertex(naboo);

      graphObj.addEdge(pandora, arendelle);
      graphObj.addEdge(arendelle, pandora);

      graphObj.addEdge(arendelle, metroville);
      graphObj.addEdge(metroville, arendelle);
      graphObj.addEdge(metroville, naboo);
      graphObj.addEdge(arendelle, monstroplolis);
      graphObj.addEdge(monstroplolis, arendelle);

      graphObj.addEdge(metroville, monstroplolis);
      graphObj.addEdge(monstroplolis, metroville);
      graphObj.addEdge(monstroplolis, naboo);
      graphObj.addEdge(metroville, narnia);
      graphObj.addEdge(narnia, metroville);

      graphObj.addEdge(narnia, naboo);
      graphObj.addEdge(naboo, narnia);

      graphObj.addEdge(naboo, monstroplolis);
      graphObj.addEdge(naboo, metroville);
    });

    it(`should return [
      'Monstroplolis',
      'Arendelle',
      'metroville',
      'Naboo',
      'Pandora',
      'Narnia'
    ] if we start with monstroplolis`, () => {
      let output = graphObj.breadthFirst(monstroplolis);
      let expectedOutput = [
        "Monstroplolis",
        "Arendelle",
        "metroville",
        "Naboo",
        "Pandora",
        "Narnia",
      ];
      expect(output).toEqual(expectedOutput);
    });
    it(`should return [
      'Pandora',
      'Arendelle',
      'metroville',
      'Monstroplolis',
      'Naboo',
      'Narnia'
    ] if we start with pandora`, () => {
      let output = graphObj.breadthFirst(pandora);
      let expectedOutput = [
        "Pandora",
        "Arendelle",
        "metroville",
        "Monstroplolis",
        "Naboo",
        "Narnia",
      ];
      expect(output).toEqual(expectedOutput);
    });
  });
});
