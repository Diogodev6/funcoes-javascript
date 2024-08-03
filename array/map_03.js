const gritar = texto => texto.toUpperCase()
const enfatizar = texto => texto + '!!!'
const exagerar = texto => texto.split('').join(' ')

const frases = ['Cuidado', 'Olha o carro']

const final = frases.map(exagerar).map(gritar).map(enfatizar)

console.log(frases, final)