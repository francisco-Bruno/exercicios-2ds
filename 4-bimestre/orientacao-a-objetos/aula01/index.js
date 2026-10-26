const projeto = {
        nome: "aula01",
        scripts: ["test", "start", "dev"],

        rodar(script) {
            return `Executando: npm run ${script}`
        },

        temScript(script) {
            return projeto.scripts.includes(script) ? true : false
        }
}

module.exports = projeto