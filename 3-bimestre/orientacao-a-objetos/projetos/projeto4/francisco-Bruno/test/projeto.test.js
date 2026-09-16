const ApoliceFactory = require("../class/ApoliceFactory")
const Automovel = require("../class/Automovel")
const Residencial = require("../class/Residencial")
const Vida = require("../class/Vida")
const Cobertura = require("../class/Cobertura")
const Sinistro = require("../class/Sinistro")
const Carteira = require("../class/Carteira")


test("deve criar apólice de automóvel", () => {

    const apolice = ApoliceFactory.criar(
        "automovel",
        "Renata Vieira",
        12
    )

    expect(apolice).toBeInstanceOf(Automovel)
    expect(apolice.nomeDoSegurado).toBe("Renata Vieira")
    expect(apolice.vigenciaEmMeses).toBe(12)
    expect(apolice.resumo()).toBe(
        "Apólice de automóvel emitida"
    )
})


test("deve criar apólice residencial", () => {

    const apolice = ApoliceFactory.criar(
        "residencial",
        "Carlos",
        24
    )

    expect(apolice).toBeInstanceOf(Residencial)
})


test("deve criar apólice de vida", () => {

    const apolice = ApoliceFactory.criar(
        "vida",
        "Maria",
        36
    )

    expect(apolice).toBeInstanceOf(Vida)
})


test("deve impedir tipo inválido", () => {

    expect(() => {
        ApoliceFactory.criar(
            "invalido",
            "João",
            12
        )
    }).toThrow("Tipo de apólice inválido")

})


test("deve criar cobertura", () => {

    const cobertura = new Cobertura(
        "Roubo",
        50000
    );

    expect(cobertura.nome).toBe("Roubo")
    expect(cobertura.limite).toBe(50000)

});


test("deve registrar sinistro no automóvel", () => {

    const cobertura = new Cobertura(
        "Roubo",
        50000
    )

    const sinistro = new Sinistro(
        3200,
        cobertura
    )


    const automovel = new Automovel(
        "Renata",
        12
    )


    automovel.adicionarRegistro(sinistro)


    expect(automovel.registros.length)
        .toBe(1)

    expect(automovel.registros[0].valor)
        .toBe(3200)

})


test("deve adicionar membros e categorias na carteira", () => {

    const carteira = new Carteira(
        "Carteira Sul"
    )


    const cobertura = new Cobertura(
        "Roubo",
        50000
    )


    const automovel = new Automovel(
        "Renata",
        12
    )


    carteira.adicionarCategoria(cobertura)
    carteira.adicionarMembro(automovel)


    expect(carteira.categorias.length)
        .toBe(1)

    expect(carteira.membros.length)
        .toBe(1)

})