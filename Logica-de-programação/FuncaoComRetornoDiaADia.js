let userName = getFirstName("João-das-Espadas-Santos","-")
console.log("Seja bem vindo " + userName)
userName = getFirstName("Maicon Jackson da Silva"," ")
console.log("Seja bem vindo " + userName)

function getFirstName(name, splitChar){
    let firstName = name.split(splitChar)[0]
    return firstName
}