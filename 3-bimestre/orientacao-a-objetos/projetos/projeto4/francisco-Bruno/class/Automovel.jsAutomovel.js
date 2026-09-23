const Apolice = require("./Apolice")

class Automovel extends Apolice {
    constructor(nomeDoSegurado, vigenciaEmMeses) {
        super(nomeDoSegurado, vigenciaEmMeses)
        this.registros = []
    }

    resumo() {
        return "Apólice de automóvel emitida"
    }

    adicionarRegistro(registro) {
        this.registros.push(registro)
    }
}

module.exports = Automovel