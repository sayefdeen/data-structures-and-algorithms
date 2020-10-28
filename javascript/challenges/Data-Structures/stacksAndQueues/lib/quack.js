const Queue = require("./queue");

function loop(n, queue) {
  let currentNode = queue.front;
  let counter = 1;
  while (currentNode) {
    counter++;
    if (counter === n) {
      if (!currentNode.next) {
        currentNode.next = queue.front;
      }
      currentNode.next = currentNode.next.next;
      currentNode.next.next = null;
      currentNode = currentNode.next;
      counter = 1;
    }
    currentNode = currentNode.next;
  }
  return currentNode;
}

let q1 = new Queue();
q1.enqueue(1);
q1.enqueue(2);
q1.enqueue(3);
q1.enqueue(4);
q1.enqueue(5);

console.log(q1.length());
console.log(loop(3, q1));
