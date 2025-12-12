console.log([2>1, 2>=1, 2==1, 2!=1])

console.log("23" < 1)

console.log([null > 0, null == 0, null >= 0])
//comparisons convert null to a number, treating it as 0

console.log([undefined > 0, undefined < 0, undefined == 0])

//Strict Check => checks both value and type
console.log("23" === 23)


//SUMMARY
//JavaScript is a dynamically-typed language
//we don't need to define the type(dataType)

const score = 100
const scoreValue = 100.8
const isLoggedIn = true
const outTemp = null

//2 types of DataTypes: Primitive & Non-Primitive
//Primitive: 7
//String, Number, Boolean, null, undefined, Symbol, BigInt

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)

//Reference-Type Or Non-Primitive: 
//Array, Objects, Functions

const heros = ["spiderMan", "IronMan", "Hulk"]

let myObj = {
    name: "Kalpana",
    age: 21,
}

const myFunction = function(){
    console.log("Hello World")
}
console.log(typeof myFunction)

//Undefined	"undefined"
// Null	"object"
// Boolean	"boolean"
// Number	"number"
// String	"string"
// Object (native and does not implement [[Call]])	"object"
// Object (native or host and does implement [[Call]])	"function"
// Object (host and does not implement [[Call]])	Implementation-defined except may not be "undefined", "boolean", "number", or "string".



