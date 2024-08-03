Array.prototype.meuFilter = function (fn) {
    const novoArray = []
    for(let i = 0; i < this.length; i++) {
        const elemento = this[i]
        if(fn(elemento, i, this)) {
            novoArray.push(this[i])
        }
    }
    return novoArray
}

const maiorOuIgualA4 = numero => numero >= 4
const numeros = [1, 2, 3, 4, 5]
console.log(numeros.filter(maiorOuIgualA4))
console.log(numeros.meuFilter(maiorOuIgualA4))