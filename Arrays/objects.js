// // we can declare objects in 2 ways: 
// // 1. literal
// // 2. constructor (singleton objects are made) 
//     // Object.create (constructor method)

// // object literals
// // here we have keys and values 

const mySym = Symbol("key1")
const user = {
    name: "Kalpana",
    surname: "Nayak",
    age: 21,
    branch: "IT",
    location: "Sambalpur",
    email: "kalpana@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    "fullName" : "Kalpana Nayak",  // this key can't be accesses with dot operator(.) BUT IT CAN NOWWW
    [mySym]: "mykey1" 
}
// keys are treated as strings only

// //acessing each value in 2 ways
// console.log(user.branch)
// console.log(user["email"])

// console.log(user.fullName)

// const mySym = Symbol("key1")
// console.log(typeof mySym)

// const user2 = {
//     [mySym]: "mykey1" //keep this syntax in mind for symbol-key 
// }
// console.log(user2[mySym])
// console.log(typeof user2[mySym])

// freezer method
// Object.freeze(user)
user.email = "kalpana@chatgpt.com" // after freezing, this will bot be reflected in the 
console.log(user)

user.greeting = function(){
    console.log("Hello user")
}

user.greeting2 = function(){
    console.log(`Hello, ${this.name}`)   // `` should be used
}

console.log(user.greeting())
console.log(user.greeting2())

// it gave undefined because we have freezed it above // release it
// after realeasing - it gave 
// [Function (anonymous)]
// [Function (anonymous)]    // because we haven't added () to the end of greeting and greeting2 




