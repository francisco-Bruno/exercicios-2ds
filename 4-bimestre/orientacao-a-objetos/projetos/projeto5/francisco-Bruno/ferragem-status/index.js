const { carregarConfig } = require("./config");

function handler(req, res) {
  const caminho = new URL(req.url, "http://localhost").pathname;
  const config = carregarConfig();

  if (caminho === "/") {
    res.writeHead(200, {
      "Content-Type": "text/plain; charset=utf-8"
    });

    res.end(`Status do servico: ${config.servico}`);
    return;
  }

  if (caminho === "/batida") {
    res.writeHead(200, {
      "Content-Type": "text/plain; charset=utf-8"
    });

    res.end("batida");
    return;
  }

  if (caminho === "/status") {
    res.writeHead(200, {
      "Content-Type": "application/json"
    });

    res.end(JSON.stringify({
      online: true,
      ...config
    }));
    return;
  }

  res.writeHead(404, {
    "Content-Type": "text/plain; charset=utf-8"
  });

  res.end("Rota nao encontrada");
}

module.exports = handler;