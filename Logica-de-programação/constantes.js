console.log("Pokemon Go diz: tem um novo pokemon na região")
console.log("Pokemon Go diz: você foi derrotado por um líder")

//"Pokemon Go diz:" se repete e não altera, isso é uma constante. Podemos transformar essa frase em uma constante da seguinte forma:

const notificacao = "Pokemon Go diz: "

console.log(notificacao + "tem um novo pokemon na região")
console.log(notificacao + "você foi derrotado por um líder")

//A constante não pode ser variável. para que o programa dê certo troque o const por let, ou seja transformar a constante em uma varável. Para verificar o que é uma constante você irá perceber que a constante já foi definida como "Pokemon Go diz: " então apague as linhas abaixo para o programa rodar com a constante.

notificacao = "Digimon go diz: "

console.log(notificacao + "tem um novo pokemon na região")
console.log(notificacao + "você foi derrotado por um líder")