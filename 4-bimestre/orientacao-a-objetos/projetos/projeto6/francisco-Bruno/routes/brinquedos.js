const express = require("express")

const router = express.Router()

const brinquedos = [
  { id: 1, nome: "Quebra-Cabeca", faixa: "6-8", preco: 35, disponivel: true },
  { id: 2, nome: "Jogo de Tabuleiro", faixa: "9-12", preco: 80, disponivel: true },
  { id: 3, nome: "Blocos", faixa: "3-5", preco: 60, disponivel: false },
]

router.get("/", (req, res) => {
  res.json(brinquedos)
})

router.get("/disponiveis", (req, res) => {
  res.json(brinquedos.filter((brinquedo) => brinquedo.disponivel))
})

router.get("/total", (req, res) => {
  res.json({ total: brinquedos.length })
})

router.post("/", (req, res) => {
  res.status(201).json({ mensagem: "Cadastro de brinquedo realizado" })
})

module.exports = router