const fs = require('fs/promises')

class Repositorio {
  constructor(arquivo = './alugueis.json') {
    this.arquivo = arquivo
  }

  async listar() {
    try {
      const dados = await fs.readFile(this.arquivo, 'utf8')
      return JSON.parse(dados)
    } catch (erro) {
      if (erro.code === 'ENOENT') {
        return []
      }
      throw erro
    }
  }

  async salvar(alugueis) {
    await fs.writeFile(
      this.arquivo,
      JSON.stringify(alugueis, null, 2)
    )
  }

  async adicionar(aluguel) {
    const alugueis = await this.listar()

    const novoAluguel = {
      id: Date.now(),
      ...aluguel
    }

    alugueis.push(novoAluguel)
    await this.salvar(alugueis)

    return novoAluguel
  }

  async buscarPorId(id) {
    const alugueis = await this.listar()
    return alugueis.find(a => a.id === Number(id))
  }

  async remover(id) {
    const alugueis = await this.listar()

    const novosAlugueis = alugueis.filter(
      a => a.id !== Number(id)
    )

    if (novosAlugueis.length === alugueis.length) {
      return false
    }

    await this.salvar(novosAlugueis)
    return true;
  }
}

module.exports = Repositorio