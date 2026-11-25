const Alugueis = require('./alugueis')

async function iniciar() {
  const sistema = new Alugueis()

  const novo = await sistema.cadastrar({
    cliente: 'João',
    imovel: 'Casa 01',
    valor: 1200
  })

  console.log('Aluguel cadastrado:', novo)

  const lista = await sistema.listar()

  console.log('Todos os aluguéis:', lista)
}

iniciar().catch(console.error)