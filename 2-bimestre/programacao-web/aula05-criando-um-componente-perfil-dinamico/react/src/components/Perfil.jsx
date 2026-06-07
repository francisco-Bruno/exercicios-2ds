export default function Perfil() {
  const usuario = {
    nome: "João Silva",
    idade: 25,
    profissao: "Desenvolvedor"
  }

  return (
    <div>
      <h1>Nome: {usuario.nome}</h1>
      <p>{usuario.idade} anos</p>
      <p>Profissão: {usuario.profissao}</p>
      <p>{usuario.idade >= 18 ? "Você é maior de idade." : "Você é menor de idade."}</p>
    </div>
  )
}