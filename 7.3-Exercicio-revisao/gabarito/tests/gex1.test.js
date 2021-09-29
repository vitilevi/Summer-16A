const factorial = require('../src/gex1');

test('Testa a função factorial', () => {
  expect(factorial).toBeDefined();
  expect(typeof factorial).toBe('function');
  expect(typeof factorial(4)).toBe('number');
  expect(factorial(4)).toBe(24);
  expect(factorial('4')).toBe('Insira um número');
  expect(factorial(12)).not.toBe(0);
});