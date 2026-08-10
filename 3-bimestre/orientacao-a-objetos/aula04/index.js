class Livro{
     constructor(titulo, autor){
         this.titulo = titulo
         this.autor = autor
     }

     descricao(){
        return `Livro: ${this.titulo} - ${this.autor}`
    }
}

const domCasmurro = new Livro("Dom Casmurro", "Machado de Assis")

module.exports = domCasmurro
