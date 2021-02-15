function quadrado(x){
    return x * x
}

//Caracteristica da função acima:
// 1) Tem apenas um parâmetro
// 2) Tem apenas uma linha de código, com return

console.log(quadrado(7))

// Uma função com essas caracteriticas pode ser escrita de forma abreviada
//da seguinte forma, com arrow function
// 1) A palavra function foi substituida pelo sinal => depois do parametro
// 2) Os parênteses em torno do parâmetro foram omitidos
// 3)As chaves foram omitidas
// 4)A palavra return foi omitida
let quadrado2 = x => x * x
console.log(quadrado2(7))

function potencia(b, e) { //b = base, e = expoente 
    return b ** e
}

console.log(potencia(2, 5))

//No formato arrow function, quando há mais de um parâmetro, os
// parênteses em volta deles retornam
// let potencia2 = (b, e) => b ** e

 console.log(potencia(2, 5))



