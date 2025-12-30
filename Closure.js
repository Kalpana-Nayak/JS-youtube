// lexical scoping
function init(){
    let name = "Kalpana"
    function displayName(){
        console.log(name); // accessing outer variable
    }
    displayName()
}
init()
// Kalpana

function outer(){
    let username = "Kalpana Nayak"
    function inner(){
        let secret = "my123"
        console.log("inner: ", username)
    }
    inner()
    function innerTwo(){
        console.log("inner two: ", username);
        // console.log("secret: ", secret); // it can't be accessed
        // no sharing between siblings
    }
    innerTwo()

    // console.log("secret in outer: ", secret); // No, parent also can't access from children
    
}
outer()
// console.log("To outer: ", username); // username is not defined

// Closure 

// A closure is the combination of a function bundled together(enclosed)
// A closure gives access to an outer function's scope from an inner function
// A closure is created every time a fucntion is created(at the function creation time)

function makeFunc(){
    const name = "Anshu"
    function displayName(){
        console.log(name);
    }
    return displayName
    // we passed the reference of the function as return
}
const myFunc = makeFunc()
myFunc() // Anshu
// not only the executional context of the function but also the lexical scope is remembered

// when we return a function from another function, a closure is created
