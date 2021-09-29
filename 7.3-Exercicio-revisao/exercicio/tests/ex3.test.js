const searchEmployee = require('../src/ex3');

describe('Testa a função searchEmployee', () => {
  it('se a função está definida', () => {
    expect(searchEmployee).toBeDefined();
  });

  it('se a variavel searchEmployee é do tipo function', () => {
    expect(typeof searchEmployee).toBe('function');
  });

  it('se o retorno da função é uma string', () => {
    const actual = searchEmployee('4456-4', 'firstName');
    expect(typeof actual).toBe('string');
  })

  it('se retorna um elemento corretamente', () => {
    const actual = searchEmployee('4456-4', 'firstName');
    expect(actual).toBe('Leila');
  });

  it('se a função retorna um erro quando o id ou detalhe inserido é incorreto', () => {
    expect(() => searchEmployee('99975-4', 'nome')).toThrow();
  });

  it('se a função retorna um erro "ID não identificada" caso o id seja incorreto', () => {
    expect(() => searchEmployee('9999-9', 'firstName')).toThrowError(new Error('ID não identificada'));
  });

  it('se a função retorna um erro "Informação indisponível" caso o detalhe seja incorreto', () => {
    expect(() => searchEmployee('4678-2', 'firstNome')).toThrowError(new Error('Informação indisponível'));
  });
});