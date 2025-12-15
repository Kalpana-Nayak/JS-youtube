const userEmail = "k@gmail.com"
if(userEmail){
    console.log("Got user email") // this get printed out => as userEmail has a value(variable, array, string, number)
}
else{
    console.log("Don't have user email") // if userEmail = ""
}

// falsy values:
// false, 0 , -0, BigInt 0n, "", null, undefined, NaN

// truthy value:
// "0", 'false', " ", [], {}, function(){}
//" " (space is a truthy value)

if(userEmail.length === 0){
    console.log("Array is Empty")
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty")
}

// Nullish Coalescing Operator (??): null undefined
let val1
val1 = 5 ?? 10 ?? 15
console.log(val1) // 5 (first value)

let val2
val2 = null ?? 10
console.log(val2) // 10

let val3
val3 = undefined ?? 15
console.log(val3)

// Ternary Operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")