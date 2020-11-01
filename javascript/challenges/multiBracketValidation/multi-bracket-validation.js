/* eslint-disable */
"use strict";

const Stack = require("../Data-Structures/stacksAndQueues/lib/stack");

function multiBracketValidation(input) {
  let regix = /\(|\)|\[|\]|\{|\}/;
  let onlyBrackets = input.split("").filter((char) => regix.test(char));
  const stack = new Stack();
  onlyBrackets.forEach((char) => {
    if (char == "(" || char == "{" || char == "[") {
      stack.push(char);
    } else {
      let opening = stack.peek();
      if (opening === "(" && char === ")") {
        stack.pop();
      } else if (opening === "{" && char === "}") {
        stack.pop();
      } else if (opening === "[" && char === "]") {
        stack.pop();
      }
    }
  });
  return stack.isEmpty();
}

module.exports = multiBracketValidation;
