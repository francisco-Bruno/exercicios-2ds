const Apolice = require("./Apolice")

class Residencial extends Apolice {

    resumo() {
        return "Apólice residencial emitida"
    }
}

module.exports = Residencial