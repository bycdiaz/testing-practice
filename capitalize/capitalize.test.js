const capitalize = require('./capitalize');

test('Capitalizes first character', () => {
  expect(capitalize('test')).toBe('Test');
});