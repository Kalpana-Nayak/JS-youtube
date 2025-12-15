const marvelHeroes = ["Thor", "Ironman", "Spiderman"]
const dc_heroes = ["Superman", "Flash", "Batman"]

// marvelHeroes.push(dc_heroes) // gives array inside a array
// console.log(marvelHeroes)
// console.log(marvelHeroes[3]) // prints the dc_heroes array
// console.log(marvelHeroes[3][2]) // push is not that feasible

// concat
// const allHeroes = marvelHeroes.concat(dc_heroes)
// console.log(allHeroes)
// // it combines both the array and gives a new array

// // spread
// const newHeroes = [...marvelHeroes, ...dc_heroes]
// console.log(newHeroes)

// const anotherArr = [10, 20, 30, [31, 32, 33], 40, [41, 42, 43], [48, 49, [49.2, 49.3]]]
// console.log(anotherArr.flat(Infinity))  //infinity refers to the depth

console.log(Array.isArray("Kalpana"))
console.log(Array.from("Kalpana"))
console.log(Array.from({name:"Kalpana"})) //interesting: gives emty array
//keys: values (we can make arrays for both separately)

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3))

// isArray, from, of

