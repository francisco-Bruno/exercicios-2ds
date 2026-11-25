const Repositorio = require('./repositorio')

class Alugueis {
  constructor(repositorio = new Repositorio()) {
    this.repositorio = repositorio
  }

  async cadastrar(dados) {
    if (!dados.cliente || !dados.imovel) {
      throw new Error('Cliente e imóvel são obrigatórios')
    }

    return this.repositorio.adicionar(dados)
  }

  async listar() {
    return this.repositorio.listar()
  }

  async buscar(id) {
    return this.repositorio.buscarPorId(id)
  }

  async excluir(id) {
    return this.repositorio.remover(id)
  }
}

module.exports = Alugueis