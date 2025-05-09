let invoice = {
    name: "Islas",
    age: 29,
    products: {
        0: ["mouse 2xwm", 29.90],
        1: ["teclado mecânico", 129.90],
        2: ["monitor", 899.99]
    }
}

generateInvoice(invoice)

function generateInvoice(invoice) {
    console.log(`O comprador é ${invoice.name}`)
    console.log(`A idade é ${invoice.age}`)
    console.log(`------------------------`)
    for (let index in invoice.products){
        let [productName, productPrice] = invoice.products[index]
        console.log(`- ${productName}: ${productPrice}`)
    }
}