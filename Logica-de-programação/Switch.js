let fruta = "morango"

switch (fruta) {
    case "laranja":
        console.log("Suco de laranja")
        break
    case "banana":
    case "morango":
        console.log("Vitamina")
        break
    case "banana":
        console.log("Suco de banana")
        break
    default:
        console.log("Suco genérico")
}