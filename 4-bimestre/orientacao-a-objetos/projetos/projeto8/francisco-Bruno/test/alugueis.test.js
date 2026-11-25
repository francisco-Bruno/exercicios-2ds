
const Alugueis = require('../alugueis')
const Repositorio = require('../repositorio')
const fs = require('fs/promises')

const arquivo = './alugueis-teste.json'

describe('Sistema de aluguéis', () => {
  let sistema

  beforeEach(async () => {
    sistema = new Alugueis(new Repositorio(arquivo))
    await fs.writeFile(arquivo, '[]')
  })

  afterAll(async () => {
    await fs.rm(arquivo, { force: true })
  })

  test('deve cadastrar um aluguel', async () => {
    const resultado = await sistema.cadastrar({
      cliente: 'Maria',
      imovel: 'Apartamento 01',
      valor: 1000
    })

    expect(resultado.cliente).toBe('Maria')
    expect(resultado.imovel).toBe('Apartamento 01')
  })

  test('deve listar os aluguéis', async () => {
    await sistema.cadastrar({
      cliente: 'João',
      imovel: 'Casa 02',
      valor: 1500
    })

    const resultado = await sistema.listar()

    expect(resultado).toHaveLength(1)
  })

  test('deve buscar aluguel pelo ID', async () => {
    const aluguel = await sistema.cadastrar({
      cliente: 'Pedro',
      imovel: 'Casa 03',
      valor: 900
    })

    const resultado = await sistema.buscar(aluguel.id)

    expect(resultado.cliente).toBe('Pedro')
  })

  test('deve excluir um aluguel', async () => {
    const aluguel = await sistema.cadastrar({
      cliente: 'Ana',
      imovel: 'Apartamento 02',
      valor: 1100
    })

    const resultado = await sistema.excluir(aluguel.id)

    expect(resultado).toBe(true)
    expect(await sistema.listar()).toHaveLength(0)
  })

  test('não deve cadastrar sem cliente ou imóvel', async () => {
    await expect(
      sistema.cadastrar({ cliente: '', imovel: '' })
    ).rejects.toThrow('Cliente e imóvel são obrigatórios')
  })
})