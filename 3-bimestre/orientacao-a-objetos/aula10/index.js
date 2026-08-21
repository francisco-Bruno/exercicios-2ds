class Produto {
    #preco

    constructor(precoInicial) {
        this.#preco = precoInicial
    }

    get preco() {
        return this.#preco
    }

    set preco(novoPreco) {
        if (novoPreco >= 0) {
            this.#preco = novoPreco
        }
    }
}

const produto = new Produto(100)

module.exports = produto