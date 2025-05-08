torrar("Pão de forma", "Felipe", 10.90)
torrar("Pão integral")

function torrar(pao, nome = "Cliente", valor = 0) {
    console.log("Torrada feita com " + pao)
    console.log("Ela é um pedido de " + nome)
    console.log("O valor total é " + valor)
}