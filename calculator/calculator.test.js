const calculate = require('./calculator');

test('Adds all entered numbers', () => {
  expect(calculate.add(2, 2, 6)).toBe(10);
});

test('Subtracts all entered numbers', () => {
  expect(calculate.subtract(10, 8, 2)).toBe(0);
});

test('Divides entered numbers', () => {
  expect(calculate.divide(10, 2)).toBe(5);
});

test('Multiplies entered numbers', () => {
  expect(calculate.multiply(10, 2, 29)).toBe(580);
});