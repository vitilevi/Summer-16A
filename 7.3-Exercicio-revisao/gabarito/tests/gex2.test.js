const myRemove = require('../src/gex2');

test('Testa a função myRemove', () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  expect(myRemove).toBeDefined();
  expect(myRemove(array, 3)).toEqual([1, 2, 4, 5, 6, 7, 8, 9]);
  expect(myRemove(array, 3)).not.toEqual(array);
  expect(myRemove(array, '3')).toEqual(array);
});