const user = {
    username: "Kalpana",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`)  // automaticaaly this.username came up
    }
}
// this => refers to the current context
// user.welcomeMessage()
// user.username = "Kalyani"
// user.welcomeMessage()

// console.log(this) // {}
// why => here "this" refers to the node environment
// window object (in browser's global object)

// function chai(){
//     console.log(this)
// }
// chai()

// function pani(){
//     let name = "Mitha Pani"
//     console.log(this.name) // undefined => we can't use "this" inside a function
// }
// pani()

// Arrow function
const chaipani = () => {
    let userName = "Kalpana"
    console.log(this)
}
console.log(chaipani())

const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(3, 4))

// Implicit return
const add2 = (num1, num2) => (num1 + num2)
console.log(add2(45, 98))

// returning object in arrow function
const addObj = (num1, num2) => ({username: "Kalpana"})
console.log(addObj())