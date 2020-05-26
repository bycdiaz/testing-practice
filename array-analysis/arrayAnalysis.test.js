const arrayAnalysis = require('./arrayAnalysis');

test('returns object with array average, min, max and length', () => {
  expect(arrayAnalysis([22, 4, 16, 8, 10])).toEqual(
    {
      "average": 12,
      "min": 4,
      "max": 22,
      "length": 5
    }
    );
})