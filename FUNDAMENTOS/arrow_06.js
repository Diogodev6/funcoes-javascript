// const somar = (a) => {
//     return function (b) {
//         return (c) => a + b + c
//     }
// }


// const somar = (a) => {
//     return (b) => (c) => a + b + c
// }

const somar = (a) => (b) => (c) => a + b + c


console.log(somar(3)(4)(5))

