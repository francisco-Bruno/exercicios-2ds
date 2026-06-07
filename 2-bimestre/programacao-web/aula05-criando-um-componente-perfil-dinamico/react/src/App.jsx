import Perfil from "./components/Perfil"

export default function App() {
  const usuario = {
    nome: "João Silva",
    idade: 25,
    profissao: "Desenvolvedor"
  }

  return (
    <div>
      <Perfil nome={usuario.nome} idade={usuario.idade} profissao={usuario.profissao} />
    </div>
  )
}