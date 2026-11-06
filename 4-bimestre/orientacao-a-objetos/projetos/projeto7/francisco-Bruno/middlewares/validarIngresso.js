function validarIngresso(req, res, next) {
    const { espectador, peca, valor } = req.body;

    if (!espectador) {
        return res.status(400).json({
            erro: "O campo espectador e obrigatorio"
        });
    }

    if (!peca) {
        return res.status(400).json({
            erro: "O campo peca e obrigatorio"
        });
    }

    if (typeof valor !== "number" || Number.isNaN(valor)) {
        return res.status(400).json({
            erro: "O campo valor deve ser um numero"
        });
    }

    if (valor <= 0) {
        return res.status(400).json({
            erro: "O campo valor deve ser maior que zero"
        });
    }

    next();
}

module.exports = validarIngresso;