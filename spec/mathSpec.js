const { MathUtils } = require("../index");

describe("MathUtils", () => {
  let math;

  beforeEach(() => {
    math = new MathUtils();
  });

  it("sum", () => {
    expect(math.sum(2, 3)).toEqual(5);
  });

  it("subtract", () => {
    expect(math.substract(5, 3)).toEqual(2);
  });

  it("multiply", () => {
    expect(math.multiply(2, 3)).toEqual(6);
  });

  it("divide", () => {
    expect(math.divide(6, 3)).toEqual(2);
  });

  it("average", () => {
    expect(math.average(2, 4)).toEqual(3);
  });

  it("factorial normal", () => {
    expect(math.factorial(5)).toEqual(120);
  });

  it("factorial zero", () => {
    expect(math.factorial(0)).toEqual(1);
  });

  it("factorial error", () => {
    expect(() => math.factorial(-1)).toThrow();
  });

  it("positivity", () => {
    expect(math.checkPositivity(5)).toBeTrue();
    expect(math.checkPositivity(-1)).toBeFalse();
  });
});