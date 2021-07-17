let value // not initialized
console.log(value)

value = null // lack of value
console.log(value)
// console.log(value.toString()) // Error!

const product = {}
console.log(product.price)
console.log(product)

product.price = 3.50
console.log(product)

product.price = undefined // don't set undefined
console.log(!!product.price)
console.log(product)

product.price = null // without price
console.log(!!product.price)
console.log(product)
