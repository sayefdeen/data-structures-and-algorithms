# Graphs

<!-- Short summary or background information -->

Graph data structure is the most important type, used in real life applications

## Challenge

<!-- Description of the challenge -->

Implement a graph data structure that have 5 methods for the beginning

- addVertex : this method will add a new node to the graph

- addEdge : this method will add a new edge between two nodes

- getNodes : this will return all the nodes in the graph in a collection

- getNeighbors : this method will return all the nodes that are connected to the passed node

- size : this method will return the size of the graph

## Approach & Efficiency

<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

addVertex : O(1) since we adding a node in the graph without iteration

addEdge : O(1) since the start and the end are passed as an arguments

getNodes : O(n) since we iterated for all the nodes

getNeighbors : (O1) to get the node, O(n) to get all the Neighbors

getSize : O(n) since we are iterated for all the nodes

## API

<!-- Description of each method publicly available in your Graph -->

- addVertex : this method will add a new node to the graph

- addEdge : this method will add a new edge between two nodes

- getNodes : this will return all the nodes in the graph in a collection

- getNeighbors : this method will return all the nodes that are connected to the passed node

- size : this method will return the size of the graph
