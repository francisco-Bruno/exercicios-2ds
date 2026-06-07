import Aluno from "./components/Aluno"

export default function App() {
  return (
    <div>
      <Aluno nome="João" curso="Desenvolvimento de Sistemas" />
      <Aluno nome="Maria" curso="Informática" />
      <Aluno nome="Pedro" curso="Redes de Computadores" />
    </div>
  )
}