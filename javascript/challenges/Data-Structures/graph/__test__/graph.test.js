/* eslint-disable quotes */
"use strict";

const getEdge = require("../../getEdge/get-edge");
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

      graphObj.addEdge(pandora, arendelle, 150);
      graphObj.addEdge(arendelle, pandora, 150);

      graphObj.addEdge(arendelle, metroville, 99);
      graphObj.addEdge(metroville, arendelle, 99);
      graphObj.addEdge(metroville, naboo, 26);
      graphObj.addEdge(metroville, pandora, 82);
      graphObj.addEdge(arendelle, monstroplolis, 42);
      graphObj.addEdge(monstroplolis, arendelle, 42);

      graphObj.addEdge(metroville, monstroplolis, 105);
      graphObj.addEdge(monstroplolis, metroville, 105);
      graphObj.addEdge(monstroplolis, naboo, 73);
      graphObj.addEdge(metroville, narnia, 37);
      graphObj.addEdge(narnia, metroville, 37);

      graphObj.addEdge(narnia, naboo, 250);
      graphObj.addEdge(naboo, narnia, 250);

      graphObj.addEdge(naboo, monstroplolis, 73);
      graphObj.addEdge(naboo, metroville, 105);
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

    describe("Code Challenge 37 get-edge", () => {
      it("should return True if there is a connection between the  cities", () => {
        let result = getEdge(graphObj, [metroville, pandora]);
        expect(result).toContain("True");
      });

      it("should return True if there is a connection between the  cities", () => {
        let result = getEdge(graphObj, [arendelle, monstroplolis, naboo]);
        expect(result).toContain("True");
      });

      it("should return False if there is no connection between the  cities", () => {
        let result = getEdge(graphObj, [naboo, pandora]);
        expect(result).toContain("False");
      });

      it("should return False if there is no connection between the  cities", () => {
        let result = getEdge(graphObj, [narnia, arendelle, naboo]);
        expect(result).toContain("False");
      });
    });
  });
});
