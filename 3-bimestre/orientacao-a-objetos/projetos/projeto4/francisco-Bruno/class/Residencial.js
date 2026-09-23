const Apolice = require("./Apolice")

class Residencial extends Apolice {
    constructor(nomeDoSegurado, vigenciaEmMeses) {
        super(nomeDoSegurado, vigenciaEmMeses)
    }

    resumo() {
        return "Apólice residencial emitida"
    }
}

module.exports = Residencial