const bomDia = () => 'Bom dia!'
const boaTarde = () => 'Boa tarde!'

const executar = (fn) => fn()


let resultado = executar(bomDia)
console.log(resultado)

resultado = executar(boaTarde)
console.log(resultado)


