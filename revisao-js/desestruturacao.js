let numeros = [10, 20, 30] // Vetor

let carro = {
    marca: 'Volkswagem',
    modelo: 'Fusca',
    ano: 1969,
    cor: 'preto'
} //Objeto

//Destruturação do Vetor
let [x, y, z] = numeros
console.log(x)
console.log(y)
console.log(z)

//Destruturação parcial do vetor
// Pegar apenas o segundo valor

let [, c, ,] = numeros
console.log(c)

// Pegando apenas os dois primeiros valores
let [a, b] = numeros
console.log(a)
console.log(b)

// Destruturação de objetos
//ao nome das propriedades do objeto. A ordem das variaveis
//é indiferente

// let {ano, modelo, cor, marca} = carro
// console.log(ano)
// console.log(modelo)
// console.log(ano)
// console.log(cor)

// Destruturação parcial: basta passar apena o nome das propriedades
// desejadas

let {marca, ano} = carro
console.log(marca)
console.log(ano)

let {marca:brand, ano:year} = carro
console.log(brand)
console.log(year)

