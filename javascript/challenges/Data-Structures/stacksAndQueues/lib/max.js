const Stack = require("./stack");

const stackObj = new Stack();

stackObj.push(5);
stackObj.push(8);
stackObj.push(10);
stackObj.push(7);
stackObj.push(9);

function getMax(stack) {
  let max = stack.top.value;
  let currnetNode = stack.top.next;
  while (currnetNode) {
    if (currnetNode.value > max) {
      max = currnetNode.value;
    }
    currnetNode = currnetNode.next;
  }
  return max;
}

function getMax1() {
  let stack2 = new Stack();
  let maxStack = new Stack();
  maxStack.push(0);
  let arrayValues = [5, 6, 2, 11, 4];
  arrayValues.forEach((num) => {
    if (num > maxStack.peek()) {
      maxStack.pop();
      maxStack.push(num);
      stack2.push(num);
    }
  });
  return maxStack.pop();
}

console.log(getMax(stackObj));
console.log(getMax1());
