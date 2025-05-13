class heroi {
    constructor(name, age, type) {
        this.name = name
        this.age = age
        this.type = type
    }
    atacar() {
        let ataque
        if (this.type === "guerreiro") {
            ataque = "espada"
            console.log(`O ${this.type} de nome ${this.name}, atacou usando ${ataque} e possui ${this.age} anos`)
        }
        else if (this.type === "mago") {
            ataque = "magia"
            console.log(`O ${this.type} de nome ${this.name}, atacou usando ${ataque} e possui ${this.age} anos`)
        }
        else if (this.type === monge) {
            ataque = "artes marciais"
            console.log(`O ${this.type} de nome ${this.name}, atacou usando ${ataque} e possui ${this.age} anos`)
        }
        else if (this.type === "ninja") {
            ataque = "shuriken"
            console.log(`O ${this.type} de nome ${this.name}, atacou usando ${ataque} e possui ${this.age} anos`)
        }
    }
}
let guerreiro = new heroi("José", 18, "guerreiro")
let mago = new heroi("Epaminondas", 200, "mago")
let monge = new heroi("Lucio", 150, "monge")
let ninja = new heroi("Vento", 30, "ninja")

guerreiro.atacar()
mago.atacar()
monge.atacar()
ninja.atacar()