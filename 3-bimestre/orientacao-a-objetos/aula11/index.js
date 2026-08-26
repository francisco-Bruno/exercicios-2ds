class Produto {
    constructor(nome, preco) {
        this.nome = nome
        this.preco = preco
    }

    static categoria = "Eletrônicos"
}

const produto1 = new Produto("Mouse", 80)
const produto2 = new Produto("Teclado", 150)

console.log(produto1.nome)
console.log(produto1.preco)

console.log(produto2.nome)
console.log(produto2.preco)

console.log(Produto.categoria)