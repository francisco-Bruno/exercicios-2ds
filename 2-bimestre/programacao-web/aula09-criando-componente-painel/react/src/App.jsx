import Painel from "./components/Painel"

export default function App() {
  return (
    <div>
      <h1>Painéis</h1>

      <Painel>
        <h2>Painel 1</h2>
        <p>primeiro painel</p>
      </Painel>

      <Painel>
        <h2>Painel 2</h2>
        <p>segundo painel</p>
        <button>Clique aqui</button>
      </Painel>
    </div>
  )
}