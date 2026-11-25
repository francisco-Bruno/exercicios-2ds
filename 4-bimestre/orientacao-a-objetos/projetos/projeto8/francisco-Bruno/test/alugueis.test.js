const repositorio = require('../repositorio')
const fs = require('fs/promises')

const arquivo = './alugueis-teste.json'

beforeEach(async () => {
    process.env.ARQUIVO_ALUGUEIS = arquivo

    try {
        await fs.unlink(arquivo)
    } catch (erro) {
        if (erro.code !== 'ENOENT') throw erro
    }
})

afterAll(async () => {
    try {
        await fs.unlink(arquivo)
    } catch (erro) {
        if (erro.code !== 'ENOENT') throw erro
    }
})

test('deve listar os alugueis', async () => {
    expect(await repositorio.listar()).toEqual([])
})

test('deve salvar um aluguel', async () => {
    const aluguel = {
        id: 1,
        assinante: 'Ana',
        jogo: 'Celeste',
        dias: 5,
        situacao: 'reservado'
    }

    const resultado = await repositorio.salvar(aluguel)

    expect(resultado).toEqual(aluguel)
})

test('deve atualizar um aluguel', async () => {
    await repositorio.salvar({
        id: 1,
        assinante: 'Ana',
        jogo: 'Celeste',
        dias: 5,
        situacao: 'reservado'
    })

    const resultado = await repositorio.atualizar(1, {
        situacao: 'finalizado'
    })

    expect(resultado.situacao).toBe('finalizado')
    expect(resultado.assinante).toBe('Ana')
})

test('deve remover um aluguel', async () => {
    await repositorio.salvar({
        id: 1,
        assinante: 'Ana',
        jogo: 'Celeste',
        dias: 5,
        situacao: 'reservado'
    })

    expect(await repositorio.remover(1)).toBe(true)
})
