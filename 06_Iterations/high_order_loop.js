// Some Array Specific loops
// ["", "". ""] => strings [{}, {}, {}] => objects (. or [])

// for of
const arr = [10, 20, 30, 40, 50]
for (const element of arr) {
    console.log(element)
}

const greeting = "Hello, Good Morning"
for (const greet of greeting) {
    console.log(`Each char is ${greet}`)
}

//maps
const map = new Map()
map.set("IN", "India")
map.set("USA", "India")
map.set("IN", "India")

