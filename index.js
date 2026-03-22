MathUtils = function () {};

MathUtils.prototype.sum = function (a, b) {
  return a + b;
};

MathUtils.prototype.substract = function (a, b) {
  return a - b;
};

MathUtils.prototype.multiply = function (a, b) {
  return a * b;
};

MathUtils.prototype.divide = function (a, b) {
  return a / b;
};

MathUtils.prototype.average = function (a, b) {
  return (a + b) / 2;
};

MathUtils.prototype.factorial = function (n) {
  if (n < 0) throw new Error("no negative");
  if (n === 0 || n === 1) return 1;
  return n * this.factorial(n - 1);
};

MathUtils.prototype.checkPositivity = function (n) {
  return n >= 0;
};

module.exports = { MathUtils };