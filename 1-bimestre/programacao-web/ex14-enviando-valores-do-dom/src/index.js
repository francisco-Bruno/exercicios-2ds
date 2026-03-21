const inputNome = document.getElementById("nome")
const botaoMostrar = document.getElementById("mostrar")
const resultado = document.getElementById("resultado")

botaoMostrar.addEventListener("click", () => {
    resultado.textContent = `Olá, ${inputNome.value}`
})