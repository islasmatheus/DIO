let numero = "1"
console.log(numero == 1)
console.log(numero === 1)
// = atribuição
// == compara o valor
// == compara o valor e o formato

let marca = "Apple"
console.log(marca !== "Apple")
console.log(marca !=="Samsung")
// !== é diferente?

let cpfBloqueado = "123.445.222-45"
let cpfUsuario = "222.111.222-09"
let oCPFBloqueado = cpfUsuario === cpfBloqueado
console.log("O usuario está barrado? " + oCPFBloqueado)

let CPFPermitido = "222.555.333-01"
let CPFDoUsuario = "222.555.333-02"
let ehBLoqueado = CPFDoUsuario !== CPFDoUsuario
console.log("É um usuário inválido? " + ehBLoqueado)