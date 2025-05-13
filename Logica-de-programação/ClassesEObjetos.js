class formaDeBolo {
    constructor(saborDaMassa, saborRecehio) {
        this.saborDaMassa = saborDaMassa
        this.saborRecehio = saborRecehio
    }

    escrever() {
        console.log(`Um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborRecehio}`)
    }

    assar() {
        console.log("bolo assado de " + this.saborDaMassa)
    }
}

let boloFesta = new formaDeBolo("massa de chocolate", "recheio de nutella")
let boloPremium = new formaDeBolo("baunilha", "coco")

boloFesta.escrever()
boloPremium.escrever()
boloPremium.assar()