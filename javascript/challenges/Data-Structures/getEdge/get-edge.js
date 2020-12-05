/* eslint-disable quotes */
"use strict";

function getEdge(graph, locations) {
  let currentVertex;
  let vertexEdges;
  let cost = 0;
  while (locations.length) {
    currentVertex = locations.shift();
    vertexEdges = graph.adjacentList.get(currentVertex);
    vertexEdges
      .map((item) => {
        return {
          place: item.vertex.value,
          weight: item.weight,
        };
      })
      .forEach((item) => {
        if (locations[0]) {
          if (item.place === locations[0].value) {
            cost += item.weight;
          }
        }
        return cost;
      });
  }
  return cost ? `True, $ ${cost}` : `False, $ ${cost}`;
}

module.exports = getEdge;
