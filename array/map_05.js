const nums = [9, 8, 7, 6, 5]

nums.map(function(el, indice, array) {
    console.log(el, indice, array)
})

nums.map(function(el, indice) {
    console.log(el, indice)
})

nums.map(el => console.log(el))