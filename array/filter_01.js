const numeroPar = numero => numero % 2 === 0

const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const pares = nums.filter(numeroPar)

console.log(pares)