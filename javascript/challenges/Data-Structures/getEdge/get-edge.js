/* eslint-disable quotes */
"use strict";

const Graph = require("../graph/lib/graph");
const Vertex = require("../graph/lib/vertex");

function getEdge(graph, locations) {
  const startingVertex = locations.shift();
  const vertexEdges = graph.adjacentList.get(startingVertex);
  let cost = 0;
  if (vertexEdges.length) {
    console.log(locations);
  } else {
    return `False $ ${cost} `;
  }
}

// Just For Testing

let graphObj = new Graph();
let pandora = new Vertex("Pandora");
let monstroplolis = new Vertex("Monstroplolis");
let narnia = new Vertex("Narnia");
let naboo = new Vertex("Naboo");
let metroville = new Vertex("metroville");
let arendelle = new Vertex("Arendelle");

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

getEdge(graphObj, [metroville, pandora]);
