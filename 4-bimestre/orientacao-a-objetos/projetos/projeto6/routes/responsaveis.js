const express = require("express")

const router = express.Router()

const responsaveis = [
  { id: 1, nome: "Ana", contato: "9999-1616" },
  { id: 2, nome: "Bruno", contato: "9999-1717" },
]

router.get("/", (req, res) => {
  res.json(responsaveis)
})

router.get("/total", (req, res) => {
  res.json({ total: responsaveis.length })
})

module.exports = router