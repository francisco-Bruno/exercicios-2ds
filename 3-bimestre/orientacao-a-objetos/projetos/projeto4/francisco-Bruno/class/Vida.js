const Apolice = require("./Apolice")

class Vida extends Apolice {
    constructor(nomeDoSegurado, vigenciaEmMeses) {
        super(nomeDoSegurado, vigenciaEmMeses)
    }

    resumo() {
        return "Apólice de vida emitida"
    }
}

module.exports = Vida