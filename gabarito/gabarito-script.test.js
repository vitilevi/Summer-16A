// describe('Testa a simulação da API', () => {
//   const fetchJoke = jest.fn();
//   beforeEach(() => {
//     const piada = 'Qual animal se jogou do prédio? O aaaaaaaaaaatum..';
//     fetchJoke.mockResolvedValue(piada);
//   })

//   afterEach(() => {
//     jest.clearAllMocks()
//   })

//   it('Testa o retorno da piada', async () => {
//     const joke = await fetchJoke();
//     expect(joke).toEqual('opa')
//   })
// })