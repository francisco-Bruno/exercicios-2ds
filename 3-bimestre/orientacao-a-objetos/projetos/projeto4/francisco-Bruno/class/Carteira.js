class Carteira {
    constructor(nome) {
        this.nome = nome
        this.categorias = []
        this.membros = []
    }

    adicionarCategoria(categoria) {
        this.categorias.push(categoria)
    }

    adicionarMembro(membro) {
        this.membros.push(membro)
    }
}

module.exports = Carteira