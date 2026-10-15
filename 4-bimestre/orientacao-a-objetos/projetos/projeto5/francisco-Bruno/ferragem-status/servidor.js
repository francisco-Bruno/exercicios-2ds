const http = require("node:http");
const handler = require("./index");
const { carregarConfig } = require("./config");

const config = carregarConfig();

const servidor = http.createServer(handler);

servidor.listen(config.porta, () => {
  console.log(
    `${config.servico} rodando na porta ${config.porta}`
  );
});