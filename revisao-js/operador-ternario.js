let nota = 6.7

let situacao

// if(nota >= 6){
//     situacao = 'APROVADO'
// }else {
//     situacao = 'REPROVADO'
// }

// if(nota >= 6) situacao = 'APROVADO'
// else situacao = 'REPROVADO'

//Usando operador ternário
//
situacao = (nota >= 6 ? 'APROVADO':'REPROVADO')
console.log({nota, situacao})

let user = 'zemane'
let msg

msg = (user === 'root' || user ==='admin' ? 'SuperUsuario': 'Usuário Comum')
console.log({user, msg})