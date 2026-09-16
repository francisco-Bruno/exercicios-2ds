const Automovel = require("./Automovel")
const Residencial = require("./Residencial")
const Vida = require("./Vida")


class ApoliceFactory {

    static criar(tipo, nomeDoSegurado, vigenciaEmMeses) {

        switch(tipo) {

            case "automovel":
                return new Automovel(nomeDoSegurado, vigenciaEmMeses)

            case "residencial":
                return new Residencial(nomeDoSegurado, vigenciaEmMeses)

            case "vida":
                return new Vida(nomeDoSegurado, vigenciaEmMeses)

            default:
                throw new Error("Tipo de apólice inválido")
        }
    }
}

module.exports = ApoliceFactory