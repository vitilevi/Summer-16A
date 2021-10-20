describe('Testa a simulação da API', () => {
  const fetchJoke = jest.fn();

  beforeEach(() => {
    const piada = 'Qual animal se jogou do prédio? O aaaaaaaaaaatum..';
    fetchJoke.mockResolvedValue(piada);
  });

  afterEach(() => {
    jest.clearAllMocks()
  });

  it('Testa se o retorno da piada não é nulo', async () => {
    const fetchApi = await fetchJoke();
    expect(fetchApi).not.toBeNull();
  });

  it('Testa se o retorno da piada é do tipo string', async() => {
    const fetchApi = await fetchJoke();
    expect(typeof fetchApi).toBe('string');
  });

  it('Testa se o retorno da piada é igual ao esperado', async() => {
    const fetchApi = await fetchJoke();
    expect(fetchApi).toBe('Qual animal se jogou do prédio? O aaaaaaaaaaatum..')
  });
});