let name = "Islas"
let age = 28
let products = ["mouse 2xwm", "teclado mecânico", "monitor"]
let productsValues = [29.90, 129.90, 899.99]

generateInvoice(name, products, productsValues, age)

function generateInvoice(name, products, productsValues, age) {
    console.log("O comprador é " + name)
    console.log("A idade é " + age)
    console.log("------------------------")
    console.log("O produto é " + products[0])
    console.log("O valor é " + productsValues[0])
}