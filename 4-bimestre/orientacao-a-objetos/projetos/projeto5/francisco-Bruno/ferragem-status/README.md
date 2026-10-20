# Ferragem Status

Servidor HTTP simples para consultar o status e a configuracao do servico.

## Executar

```sh
npm start
```

Para executar em modo de desenvolvimento, carregando as variaveis do arquivo `.env`:

```sh
npm run dev
```

As variaveis `SERVICO`, `PORT` e `AMBIENTE` sao opcionais. Seus valores padrao sao `ferragem`, `3000` e `desenvolvimento`.

## Rotas

- `GET /` retorna o nome do servico.
- `GET /batida` retorna `batida`.
- `GET /status` retorna um JSON com `online: true` e a configuracao atual.
- Qualquer outra rota retorna status `404`.

## Testes

```sh
npm test
```