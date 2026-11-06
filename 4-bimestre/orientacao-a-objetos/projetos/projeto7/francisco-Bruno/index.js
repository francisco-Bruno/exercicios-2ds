const express = require("express")

const app = express()

const ingressosRouter = require("./routes/ingressos")

app.use(express.json())

app.use("/ingressos", ingressosRouter)

app.use((req, res) => {
    res.status(404).json({
        erro: "Rota nao encontrada"
    })
})

app.use((erro, req, res, next) => {
    res.status(erro.status || 500).json({
        erro: erro.message
    })
})

module.exports = app