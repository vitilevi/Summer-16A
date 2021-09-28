const searchEmployee = require('../src/gex3');

describe('Testa a função searchEmployee()', () => {
  it('Testa se a função está definida', () => {
    expect(searchEmployee).toBeDefined();
  });

  it('Testa se a função retorna um elemento corretamente', () => {
    const actual = searchEmployee('4456-4', 'firstName')
    expect(actual).toEqual('Leila');
  });

  it('Testa as habilidades do id "4456-4"', () => {
    const actual = searchEmployee('4456-4', 'specialities');
    expect(actual).toContain('Context API');
  })

  it('Testa se a função retorna um erro quando inserido o id incorreto', () => {
    expect(() => searchEmployee('1256-8', 'specialities')).toThrow();
  });

  it('Testa se a mensagem de erro quando o id esta incorreto é "ID não identificada"', () => {
    expect(() => searchEmployee('1256-8', 'specialities')).toThrowError(new Error("ID não identificada"));
  });

  it('Testa se a mensagem de erro quando o id esta incorreto é "ID não identificada"', () => {
    expect(() => searchEmployee('4456-4', 'firstNome')).toThrowError(new Error("Informação indisponível"));
  });
})