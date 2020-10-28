/* eslint-disable */
"use strict";

function multiBracketValidation(input) {
  let openParentheses = input.match(/\(/g) ? input.match(/\(/g).length : null;
  let openCurly = input.match(/\{/g) ? input.match(/\{/g).length : null;
  let openSquare = input.match(/\[/g) ? input.match(/\[/g).length : null;
  let closedParentheses = input.match(/\)/g) ? input.match(/\)/g).length : null;
  let closedCurly = input.match(/\}/g) ? input.match(/\}/g).length : null;
  let closedSquare = input.match(/\]/g) ? input.match(/\]/g).length : null;
  return (
    openParentheses === closedParentheses &&
    openCurly === closedCurly &&
    openSquare === closedSquare
  );
}

module.exports = multiBracketValidation;
