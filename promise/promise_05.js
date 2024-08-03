// fetch
// const url = 'https://dog.ceo/api/breeds/image/random'
// fetch(url)
//     .then(resposta => resposta.json())
//     .then(dados => console.log(dados))

const url = 'https://bible-api.com/john 3:16'
fetch(url)
    .then(resposta => resposta.json())
    .then(dados => dados.verses[0])
    .then(versiculo => versiculo.text)
    .then(console.log)