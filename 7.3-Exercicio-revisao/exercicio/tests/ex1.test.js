const factorial = require('../src/ex1');

test('Testa a função factorial', () => {
  expect(factorial).toBeDefined();
  expect(typeof factorial).toBe('function');
  expect(typeof factorial(5)).toBe('number');
  expect(typeof factorial('a')).toBe('string');
  expect(factorial(5)).toBe(120);
  expect(factorial('5')).toBe('Insira um número');
  expect(factorial(' ')).toBe('Insira um número');
});