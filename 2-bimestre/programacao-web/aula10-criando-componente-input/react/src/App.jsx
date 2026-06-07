import Input from "./components/Input"

export default function App() {
  return (
    <div>
      <Input label="Nome" type="text" placeholder="Digite seu nome" />
      <Input label="Email" type="email" placeholder="Digite seu email" />
      <Input label="Senha" type="password" />
    </div>
  )
}