
function sayMyName() {
    console.log("K")
    console.log("A")
    console.log("L")
    console.log("P")
    console.log("A")
    console.log("N")
    console.log("A")
}   // function defination
sayMyName() // function reference


function addTwoNumbers(num1, num2){
    // here num1 and num2 are parameters
    console.log(num1 + num2)
}
// now pass the two numbers as arguments
addTwoNumbers(3,4)
addTwoNumbers(3,"a") // it gives 3a => because we haven't put on any constraints like data types

//we can KEEP the result in another var too
const result = addTwoNumbers(3,4)
console.log("Result: ", result)   // gives => Result:  undefined
// because console and return are two different things

function newOperation(num1, num2){
    let res = num1 * num2 // this res is inside the scope of the function
    return res
}
// after return res line, any line after that will not be executed
const res = newOperation(3, 5) // this res is outside the scope of the function
console.log("Result: ", res) // 15

function loginUserMessage(username){
    if(username === undefined){
    // or we can write if(!username){}
        console.log("Please enter a username")  // until this it will print the "just logged in" line again 
        // to stop that we need to write return
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Kalpana")) // Kalpana just logged in
console.log(loginUserMessage("")) // just logged in 
console.log(loginUserMessage()) // undefined just logged in

