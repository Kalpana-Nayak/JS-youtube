const score = 400
console.log(score)

const balance = new Number(100)  //cast
console.log(balance)

console.log(balance.toString()) //Now 100 is converted to string
console.log(balance.toString().length)
console.log(balance.toFixed(2))

const otherNumber = 23.849763
console.log(otherNumber.toPrecision(3))

const hundreds = 1000000
console.log(hundreds.toLocaleString())
console.log(hundreds.toLocaleString('en-IN'))

