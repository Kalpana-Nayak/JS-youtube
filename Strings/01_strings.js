const name = "Kalpana"
const repoCount = 9
console.log(name + repoCount + " Value")
//Kalpana9 Value

console.log(`hello my name is ${name} and my repo count is ${repoCount}`)
// //hello my name is Kalpana and my repo count is 9

const gameName = new String('Kalpana-Nayak')
gameName

//Try writing the above two lines in inspect - console and look at all functionss

console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(3))
console.log(gameName.indexOf('p'))

const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-3, 4)
console.log(anotherString)

const newString2 = "  Kalpana  "
console.log(newString2)
console.log(newString2.trim())

const url = "https://hitest.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'))
console.log(url.includes("hitesh"))

console.log(gameName.split('-'))