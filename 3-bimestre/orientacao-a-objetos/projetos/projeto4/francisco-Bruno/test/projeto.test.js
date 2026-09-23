const Apolice = require("../class/Apolice")
const Automovel = require("../class/Automovel")
const Residencial = require("../class/Residencial")
const Vida = require("../class/Vida")
const Cobertura = require("../class/Cobertura")
const Carteira = require("../class/Carteira")
const Sinistro = require("../class/Sinistro")
const ApoliceFactory = require("../class/ApoliceFactory")

describe("Projeto 4 - Seguradora Digital", () => {

    test("Apolice deve possuir nome e vigência", () => {
        const apolice = new Apolice("Renata Vieira", 12)

        expect(apolice.nomeDoSegurado).toBe("Renata Vieira")
        expect(apolice.vigenciaEmMeses).toBe(12)
        expect(apolice.resumo()).toBe(
            "Apólice registrada no sistema"
        );
    });

    test("Automovel deve herdar de Apolice", () => {
        const automovel = new Automovel("Renata Vieira", 12)

        expect(automovel).toBeInstanceOf(Apolice)
        expect(automovel).toBeInstanceOf(Automovel)
        expect(automovel.nomeDoSegurado).toBe("Renata Vieira")
        expect(automovel.vigenciaEmMeses).toBe(12)
        expect(automovel.resumo()).toBe(
            "Apólice de automóvel emitida"
        );
    });

    test("Residencial deve herdar de Apolice", () => {
        const residencial = new Residencial("João Silva", 24)

        expect(residencial).toBeInstanceOf(Apolice)
        expect(residencial.resumo()).toBe(
            "Apólice residencial emitida"
        );
    });

    test("Vida deve herdar de Apolice", () => {
        const vida = new Vida("Maria Souza", 36)

        expect(vida).toBeInstanceOf(Apolice)
        expect(vida.resumo()).toBe(
            "Apólice de vida emitida"
        );
    });

    test("Factory deve criar Automovel", () => {
        const apolice = ApoliceFactory.criar(
            "automovel",
            "Renata Vieira",
            12
        );

        expect(apolice).toBeInstanceOf(Automovel);
        expect(apolice.nomeDoSegurado).toBe("Renata Vieira")
        expect(apolice.vigenciaEmMeses).toBe(12)
    });

    test("Factory deve criar Residencial", () => {
        const apolice = ApoliceFactory.criar(
            "residencial",
            "João Silva",
            24
        );

        expect(apolice).toBeInstanceOf(Residencial)
    });

    test("Factory deve criar Vida", () => {
        const apolice = ApoliceFactory.criar(
            "vida",
            "Maria Souza",
            36
        );

        expect(apolice).toBeInstanceOf(Vida)
    });

    test("Factory deve rejeitar tipo inválido", () => {
        expect(() => {
            ApoliceFactory.criar(
                "invalido",
                "Renata Vieira",
                12
            );
        }).toThrow("Tipo de apólice inválido")
    });

    test("Cobertura deve possuir nome e limite", () => {
        const cobertura = new Cobertura("Roubo", 50000)

        expect(cobertura.nome).toBe("Roubo")
        expect(cobertura.limite).toBe(50000)
    });

    test("Carteira deve adicionar categorias e membros", () => {
        const carteira = new Carteira("Carteira Sul")

        const cobertura = new Cobertura("Roubo", 50000)

        const automovel = new Automovel(
            "Renata Vieira",
            12
        );

        carteira.adicionarCategoria(cobertura)
        carteira.adicionarMembro(automovel)

        expect(carteira.nome).toBe("Carteira Sul")
        expect(carteira.categorias).toContain(cobertura)
        expect(carteira.membros).toContain(automovel)
    });

    test("Sinistro deve possuir valor e cobertura", () => {
        const cobertura = new Cobertura("Roubo", 50000)

        const sinistro = new Sinistro(
            3200,
            cobertura
        );

        expect(sinistro.valor).toBe(3200)
        expect(sinistro.cobertura).toBe(cobertura)
    });

    test("Automovel deve adicionar registros de sinistro", () => {
        const cobertura = new Cobertura("Roubo", 50000)

        const sinistro = new Sinistro(
            3200,
            cobertura
        )

        const automovel = new Automovel(
            "Renata Vieira",
            12
        )

        automovel.adicionarRegistro(sinistro)

        expect(automovel.registros).toContain(sinistro)
        expect(automovel.registros).toHaveLength(1)
    })
})