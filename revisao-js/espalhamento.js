console.log(Math.min(20, 3, 47, 33, 41)) // Retorna o menor número da lista
console.log(Math.max(20, 3, 47, 33, 41)) // Retorna o maior número da lista

let numeros = [20, 3, 47, 33, 41]

//Fazendo o espalhamento do vetor para conseguir os parâmetros da lista
console.log(Math.min(...numeros)) //Retorna o meno número da lista
console.log(Math.max(...numeros)) //Retorna o maior número da lista

//Primeira tentativa de fazer um vetor que inclua os elementos de outro vetor
// let maisNumeros = [19, 7, 38, numeros, 0, 5]
// console.log(maisNumeros)

// Usar o espalhamento
 let maisNumeros = [19, 7, 38, ...numeros, 0, 5]
console.log(maisNumeros)

//Usar o espalhamento em parâmetosde função (parametro de resto)
function somaTudo(...nums){ //...significa que não a quantidade fixa de parâmetros
    let soma = 0
    // O parâmtro de resto, dentro de uma função, é interpretado como um vetor
    for(let n of nums) soma += n
    return soma
}


console.log(somaTudo(14, 56, 78, 0, -4, 41)) // Quantidade de números é aletória
console.log(somaTudo(25, -7, 14))

function calcular(oper, ...nums){

    switch(oper){
        case '+':
            res = 0
            for(let n of nums) res += n
            break
        case '*':
            res = 1 // Elemento neutro da multiplicação
            for(let n of nums) res *= n
            break
    }
    return res
}

console.log(calcular('+', 15, 19, 12, 32, -7, 6))
console.log(calcular('*', 15, 19, 12, 32, -7, 6))

//como chamar a função somaTudo() passando a ela os números do vetor mais Numeros?
console.log(somaTudo(...maisNumeros))

//Chamando calcular() de forma semelhante
console.log(somaTudo('*',...maisNumeros))
