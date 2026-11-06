const express = require("express");
const router = express.Router();

const validarIngresso = require("../middlewares/validarIngresso");

let ingressos = [
    {
        id: 1,
        espectador: "Ana",
        peca: "A Visita",
        valor: 20,
        situacao: "utilizado"
    },
    {
        id: 2,
        espectador: "Bruno",
        peca: "O Noviço",
        valor: 35,
        situacao: "pago"
    },
    {
        id: 3,
        espectador: "Carla",
        peca: "Hamlet",
        valor: 60,
        situacao: "pago"
    }
];

// GET /ingressos
router.get("/", (req, res) => {
    let resultado = [...ingressos];

    const { situacao, valorMin } = req.query;

    if (situacao) {
        resultado = resultado.filter(
            ingresso => ingresso.situacao === situacao
        );
    }

    if (valorMin !== undefined) {
        resultado = resultado.filter(
            ingresso => ingresso.valor >= Number(valorMin)
        );
    }

    res.status(200).json(resultado);
});

// GET /ingressos/:id
router.get("/:id", (req, res, next) => {
    const id = Number(req.params.id);

    const ingresso = ingressos.find(
        ingresso => ingresso.id === id
    );

    if (!ingresso) {
        const erro = new Error("Ingresso nao encontrado");
        erro.status = 404;

        return next(erro);
    }

    res.status(200).json(ingresso);
});

// POST /ingressos
router.post("/", validarIngresso, (req, res) => {
    const { espectador, peca, valor } = req.body;

    const maiorId = Math.max(
        ...ingressos.map(ingresso => ingresso.id)
    );

    const novoIngresso = {
        id: maiorId + 1,
        espectador,
        peca,
        valor,
        situacao: "reservado"
    };

    ingressos.push(novoIngresso);

    res.status(201).json({
        mensagem: "Registro de ingresso criado"
    });
});

module.exports = router;