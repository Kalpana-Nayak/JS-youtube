{} // this is scope

var c = 300 // this is global scope
if(true){
    let a = 10
    const b = 20
    var c = 30
} // this ia a local scope

// console.log(a) // a is not defined
// console.log(b) // b is not defined
console.log(c) //30 => that's why we don't use var

let a = 500
if(true){
    let a = 10
    console.log("inner: ", a)
}
console.log(a)


// scope level
function one(){
    const username = "Kalpana"
    
    function two(){   // for func two, func one is global
        const website = "youtube"
        console.log(username)
    }

    // console.log(website) // but here func one can't access func two 
    // parent !-> child, child -> parent (-> = inherit)
    two() // Kalpana
}
one() // prints nothing

if(true){
    const username = "Nayak"
    if(username === "Nayak"){
        const website = "instagram"
        console.log(username + website) // Nayakinstagram
    }
    // console.log(website) // error arises here
    // why? => scope of website is over
}
// console.log(username) // error arises here too
//why => scope already ended above

//interesting
function addone(num){
    return num + 1
}
addone(5) // does nothing
console.log(addone(5)) // 6

//another way => declaring the function + holding it in a variable : Hoisting
addTwo(5)
const addTwo = function(num){
    return num + 2
}