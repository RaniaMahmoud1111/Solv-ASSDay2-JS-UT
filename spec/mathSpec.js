const { MathUtils } = require("../index");

describe("MathUtils", () => {
  let math;

  beforeEach(() => {
    math = new MathUtils();
  });

  /* ========= sum ========= */
  it("sum should add numbers", () => {
    expect(math.sum(2, 3)).toEqual(5);
  });

  /* ========= subtract ========= */
  it("subtract should work", () => {
    expect(math.substract(5, 3)).toEqual(2);
  });

  /* ========= multiply ========= */
  it("multiply should work", () => {
    expect(math.multiply(2, 3)).toEqual(6);
  });

  /* ========= divide ========= */
  it("divide should work", () => {
    expect(math.divide(6, 3)).toEqual(2);
  });

  /* ========= average ========= */
  it("average should work", () => {
    expect(math.average(2, 4)).toEqual(3);
  });

  /* ========= factorial ========= */
  it("factorial should return 1 for 0", () => {
    expect(math.factorial(0)).toEqual(1);
  });

  it("factorial should return correct value", () => {
    expect(math.factorial(5)).toEqual(120);
  });

  it("factorial should throw error for negative", () => {
    expect(() => math.factorial(-1)).toThrow();
  });

  /* ========= positivity ========= */
  it("should return true for positive", () => {
    expect(math.checkPositivity(5)).toBeTrue();
  });

  it("should return false for negative", () => {
    expect(math.checkPositivity(-1)).toBeFalse();
  });

  it("should return true for zero", () => {
    expect(math.checkPositivity(0)).toBeTrue();
  });
});