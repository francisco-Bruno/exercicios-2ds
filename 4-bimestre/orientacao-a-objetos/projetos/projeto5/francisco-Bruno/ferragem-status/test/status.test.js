
const handler = require("../index");
const { carregarConfig } = require("../config");

function criarRes() {
  return {
    statusCode: null,
    headers: {},
    corpo: "",

    writeHead(statusCode, headers = {}) {
      this.statusCode = statusCode;
      this.headers = headers;
    },

    end(corpo = "") {
      this.corpo = corpo;
    }
  };
}

describe("Configuração", () => {
  const ambienteOriginal = { ...process.env };

  beforeEach(() => {
    delete process.env.SERVICO;
    delete process.env.PORT;
    delete process.env.AMBIENTE;
  });

  afterAll(() => {
    process.env = ambienteOriginal;
  });

  test("usa os valores padrão", () => {
    expect(carregarConfig()).toEqual({
      servico: "ferragem",
      porta: 3000,
      ambiente: "desenvolvimento"
    })
  })

  test("lê as variáveis de ambiente", () => {
    process.env.SERVICO = "ferragem-producao"
    process.env.PORT = "4000"
    process.env.AMBIENTE = "producao"

    expect(carregarConfig()).toEqual({
      servico: "ferragem-producao",
      porta: 4000,
      ambiente: "producao"
    })
  })
})

describe("Rotas", () => {
  test("GET / retorna o nome do serviço", () => {
    process.env.SERVICO = "ferragem-producao"

    const req = { method: "GET", url: "/" }
    const res = criarRes()

    handler(req, res)

    expect(res.statusCode).toBe(200)
    expect(res.corpo).toBe(
      "Status do servico: ferragem-producao"
    )
  })

  test("GET /batida retorna batida", () => {
    const req = { method: "GET", url: "/batida" }
    const res = criarRes()

    handler(req, res)

    expect(res.statusCode).toBe(200)
    expect(res.corpo).toBe("batida")
  })

  test("GET /status retorna JSON com online true", () => {
    const req = { method: "GET", url: "/status" }
    const res = criarRes()

    handler(req, res)

    expect(res.statusCode).toBe(200)
    expect(res.headers["Content-Type"]).toBe(
      "application/json"
    )
    expect(JSON.parse(res.corpo)).toEqual({
      online: true,
      ...carregarConfig()
    })
  })

  test("rota inexistente retorna 404", () => {
    const req = { method: "GET", url: "/invalida" }
    const res = criarRes()

    handler(req, res)

    expect(res.statusCode).toBe(404)
    expect(res.corpo).toBe("Rota nao encontrada")
  })
})