let myName = "Kalpana"
let anotherName = "Little"
anotherName = "Kalyani"

console.log(myName)
console.log(anotherName)
//Kalpana
//Kalyani


let userOne = {
    email: "kalpana@google.com",
    upi: "kalpana@ybl"
}

let userTwo = userOne

userTwo.email = "kalyani@google.com"

console.log(userOne.email)
console.log(userTwo.email)

//kalyani@google.com
//kalyani@google.com

