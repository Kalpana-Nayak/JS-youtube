// if

if(true){
    // this code will execute
}
if(false){
    //this will not execute
}

const isUserLoggedIn = true
const temperature = 91
if(temperature < 50){
    console.log("less than 50")
}
else{
    console.log(`temperature is: ${temperature}`)
}
console.log("always execute")

const score = 200
if(score > 100){
    const power = "fly"
    console.log(`User power: ${power}`)
}
// console.log(`User power: ${power}`) // this will throw a error 
// because "power" is confined to a particular scope
// but if we use var in place of const, power can be accessed globally without any scope

// short hand notation
const balance = 1000
// if(balance > 500) console.log("yes");

// nesting
if(balance < 500){
    console.log("less than 500")
}
else if(balance < 750){
    console.log("less than 750")
}
else if(balance < 900){
    console.log("less than 900")
}
else{
    console.log("less than 1200")
}

// online shopping example
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){  // &&(and) => both condition should be ture
    console.log("you can shop")
}
if(loggedInFromGoogle || loggedInFromEmail || userLoggedIn || debitCard){ 
    // ||(or) => one true will also result in true
    console.log("you can shop")
}




