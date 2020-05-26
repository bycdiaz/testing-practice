const reverseString = require('./reverseString');

test('Reverses string', () => {
  expect(reverseString('reverse')).toBe('esrever');
});
