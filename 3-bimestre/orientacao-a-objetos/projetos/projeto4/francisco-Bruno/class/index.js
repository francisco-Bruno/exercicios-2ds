const ApoliceFactory = require("./class/ApoliceFactory")
const Cobertura = require("./class/Cobertura")
const Carteira = require("./class/Carteira")
const Sinistro = require("./class/Sinistro")


const apolice = ApoliceFactory.criar(
    "automovel",
    "Renata Vieira",
    12
)


const cobertura = new Cobertura(
    "Roubo",
    50000
)


const sinistro = new Sinistro(
    3200,
    cobertura
)


apolice.adicionarRegistro(sinistro)


const carteira = new Carteira(
    "Carteira Sul"
)


carteira.adicionarMembro(apolice)
carteira.adicionarCategoria(cobertura)


console.log(apolice.resumo())
console.log(apolice.nomeDoSegurado)
console.log(apolice.vigenciaEmMeses)

console.log(carteira)