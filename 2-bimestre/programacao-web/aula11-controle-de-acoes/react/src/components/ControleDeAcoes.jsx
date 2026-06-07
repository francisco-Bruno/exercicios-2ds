export default function ControleDeAcoes() {

  function atacar() {
    alert("Você atacou o inimigo")
  }

  function curar() {
    alert("Você se curou")
  }

  function fugir() {
    alert("Você fugiu da batalha")
  }

  return (
    <div>
      <h2>Controle de Ações</h2>

      <button onClick={atacar}>
        Atacar
      </button>

      <button onClick={curar}>
        Curar
      </button>

      <button onClick={fugir}>
        Fugir
      </button>
    </div>
  )
}