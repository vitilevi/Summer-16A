const myRemove = require('../src/ex2');

test('Testa a função myRemove', () => {
  const arr = [1, 2, 3, 4, 5, 6];
  expect(myRemove).toBeDefined();
  expect(typeof myRemove).toBe('function');
  expect(typeof myRemove(arr, 2)).toEqual('object');
  expect(myRemove(arr, 3)).toEqual([1, 2, 4, 5, 6]);
  expect(myRemove(arr, 4)).toEqual([1, 2, 3, 5, 6]);
  expect(myRemove(arr, 7)).toEqual(arr);
  expect(myRemove(arr, 4)).not.toContain(4);
});