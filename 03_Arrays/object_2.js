const tinderUser = new Object()   //Singleton Object
// console.log(tinderUser)

// const tinderUser = {}  //Non-Singleton Object
// console.log(tinderUser)

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "kalpana@gmail.com",
    fullName: {
        userfullname: {
            firstname: "Kalpana",
            lastname: "Nayak"
        }
    }
}
console.log(regularUser.fullName.userfullname.firstname)

// ccombinig objects together
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2} //this gives object inside object

// const obj3 = Object.assign({}, obj1, obj2) // this gives the combined object.
// {} is given for target-sorce purpose and returnTarget === target

const obj3 = {...obj1, ...obj2}  //spread operator
console.log(obj3)

const user = [
    {
        id: 1,
        email: "kalpana@google.com"
    },
    {
        id: 2,
        email: "nayak@google.com"
    },
    {

    }
]
user[1].email

console.log(Object.keys(tinderUser)) // stores the keys of tinderUser as an array
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty('isLoggedIn'))