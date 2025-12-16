// Some Array Specific loops
// ["", "". ""] => strings [{}, {}, {}] => objects (. or [])

// // for of
// const arr = [10, 20, 30, 40, 50]
// for (const element of arr) {
//     console.log(element)
// }

// const greeting = "Hello, Good Morning"
// for (const greet of greeting) {
//     console.log(`Each char is ${greet}`)
// }

//maps
const map = new Map()
map.set("IN", "India")
map.set("USA", "Unites States of America")
map.set("JN", "Japan")
map.set("IN", "India") // only takes unique value and in the exact same order
// console.log(map)

for (const key of map) {
    console.log(key);
}

for (const [key, value] of map) { // de-structure of array
    // console.log(key);
    // console.log(value);
    // console.log(key, ':-', value);
}

const myObject = {
    "game1" : "NFS",
    "game2" : "Spiderman"
}
for (const [key, value] of myObject) {   // myObject is not iterable
    console.log(key, ':-', value);
}

