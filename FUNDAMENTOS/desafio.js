const multiplicar = (a, b) => a * b
const somar = (a, b) => a + b
const subtrair = (a, b) => a - b

const calcular = a => b => fn => fn(a, b)
        
    
console.log(calcular(10)(7)(multiplicar))
console.log(calcular(10)(7)(somar))
console.log(calcular(10)(7)(subtrair))