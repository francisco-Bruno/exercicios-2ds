class Apolice {
    #nomeDoSegurado;
    #vigenciaEmMeses;

    constructor(nomeDoSegurado, vigenciaEmMeses) {
        this.#nomeDoSegurado = nomeDoSegurado;
        this.#vigenciaEmMeses = vigenciaEmMeses;
    }

    get nomeDoSegurado() {
        return this.#nomeDoSegurado;
    }

    get vigenciaEmMeses() {
        return this.#vigenciaEmMeses;
    }

    resumo() {
        return "Apólice registrada no sistema";
    }
}

module.exports = Apolice;