console.log(Math)

console.log(Math.abs(-42)) //absolute value

console.log(Math.round(4.65))
console.log(Math.ceil(4.2)) //ceiling => upper value
console.log(Math.floor(4.9)) //floor => lower value

console.log(Math.min(3,6,7,8,9))
console.log(Math.max(4,6,7,8,9))

console.log(Math.random()) //will give number between 0 and 1

console.log((Math.random() * 10) + 1)
console.log(Math.floor(Math.random() * 10) + 1)

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)