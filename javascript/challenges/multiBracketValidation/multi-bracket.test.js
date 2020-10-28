/* eslint-disable */
"use strict";

const multiBracketValidation = require("./multi-bracket-validation");

describe("Multi Bracket Validation ", () => {
  it("should return true if the sending string brackets was balanced ", () => {
    expect(multiBracketValidation("()[[Extra Characters]]")).toBeTruthy();
    expect(multiBracketValidation("(){}[[]]")).toBeTruthy();
  });
  it("should return false if the sending string brackets was not balanced ", () => {
    expect(multiBracketValidation("{}(){}")).toBeTruthy();
  });
  it("should return false if the sending string was one bracket only", () => {
    expect(multiBracketValidation("(")).toBeFalsy();
    expect(() => {
      multiBracketValidation("}");
    }).toThrow("Stack Is Empty");
    expect(multiBracketValidation("[")).toBeFalsy();
    expect(multiBracketValidation("[}")).toBeFalsy();
  });
  it("should return true if the sending string brackets was balanced ", () => {
    expect(multiBracketValidation("{}{Code}[Fellows](())")).toBeTruthy();
  });
  it("should return false if the sending string brackets was not balanced", () => {
    expect(multiBracketValidation("{(})")).toBeFalsy();
  });
  it("should return false if the sending string brackets was not balanced", () => {
    expect(multiBracketValidation("[({}]")).toBeFalsy();
  });
  it("should return false if the sending string brackets was not balanced", () => {
    expect(multiBracketValidation("(](")).toBeFalsy();
  });
});
