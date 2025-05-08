let saldoVitorias = calcularSaldoVitorias(70, 2)
let nivel = calcularNivel(saldoVitorias)

console.log(" O Herói tem de saldo de " + saldoVitorias + " está no nível de " + nivel)

function calcularSaldoVitorias(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas
    return saldoVitorias
}

function calcularNivel(saldoVitorias) {
    let nivel
    if (saldoVitorias < 10) {
        nivel = "Ferro"
    } else if (saldoVitorias <= 20) {
        nivel = "Bronze"
    } else if (saldoVitorias <= 50) {
        nivel = "Prata"
    } else if (saldoVitorias <= 80) {
        nivel = "Ouro"
    } else if (saldoVitorias <= 90) {
        nivel = "Diamante"
    } else if (saldoVitorias <= 100) {
        nivel = "Lendário"
    } else {
        nivel = "Imortal"
    }
    return nivel

}
