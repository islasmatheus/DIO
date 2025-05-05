// (||) or - Nosso boneco só poderá sair se estiver sem chuva ou com guarda chuva.
let tempo = "Sol"
let item ="guarda chuva"
let podeSair = (tempo !== "chuva") || (item === "guarda chuva")
console.log("O nosso personagem pode sair? " + podeSair)

tempo = "Sol"
item ="guarda sol"
podeSair = (tempo !== "chuva") || (item === "guarda chuva")
console.log("O nosso personagem pode sair? " + podeSair )

tempo = "chuva"
item ="guarda sol"
podeSair = (tempo !== "chuva") || (item === "guarda chuva")
console.log("O nosso personagem pode sair? " + podeSair )