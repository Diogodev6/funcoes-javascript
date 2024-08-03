const path = require('path')
const fs = require('fs')

const caminho = path.join(__dirname, '..', 'dados', 'aprovados.txt')

function lerArquivo(erro, conteudo) {
    if (erro) return
    console.log(conteudo.toString())
}

fs.readFile(caminho, lerArquivo)
console.log('Fim #01!!!!')

// const conteudo = fs.readFileSync(caminho)
// console.log(conteudo.toString())
// console.log('Fim #02!!!!')
