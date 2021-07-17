// storing a function in the variable
const printSum = function(a, b) {
  console.log(a + b)
}

printSum(2, 5)

// Storing a arrow function in the variable
const sum = (a, b) => {
  return a + b
}

console.log(sum(2,3))

// implicit return
const subtraction = (a,b) => a - b

console.log(subtraction(3,2))

const print2 = a => console.log(a)
print2('Cool!!!!!')
