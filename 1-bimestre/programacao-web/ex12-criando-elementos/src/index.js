const lista = document.getElementById("lista")
const botao = document.getElementById("adicionar")

botao.addEventListener("click", () => {
    const novoItem = document.createElement("li")
    novoItem.textContent = "Novo Item"
    lista.appendChild(novoItem)
})