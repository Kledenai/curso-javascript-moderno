// function without return
function printDivision(a, b) {
  console.log( a / b)
}

function printSum(a, b) {
  console.log( a + b)
}

printDivision(1, 0)
printSum(2,5)
printSum(
  a=10,
  b=11
)

// function with return
function Sum(a, b = 0) {
  return a + b
}

console.log(Sum(5,9))
console.log(Sum(5))
