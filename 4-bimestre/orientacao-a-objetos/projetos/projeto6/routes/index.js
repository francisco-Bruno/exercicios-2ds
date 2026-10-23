const express = require("express")
const brinquedosRouter = require("./brinquedos")
const responsaveisRouter = require("./responsaveis")

const router = express.Router()

router.get("/", (req, res) => {
  res.json({ mensagem: "API de Brinquedoteca" })
});

router.use("/brinquedos", brinquedosRouter)
router.use("/responsaveis", responsaveisRouter)

module.exports = router