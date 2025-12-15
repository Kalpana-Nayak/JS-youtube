// Immediately Invoked Function Expressions (IIFE)
// () () ;

// 1st () for function declaration 
// 2nf () for function reference/call/execution
// we use ;  here because iife doesn't know which context to follow
// to run the next function we must give a ; to stop the first function execution

(function chai(){
    // named IIFE
    console.log(`DATABASE CONNECTED SECURELY`)
}) ();

// sometime we face problem due to pollution in global scope
// so to remove the pollution in global scope we use iife

(function aurcode(){
    console.log(`AGAIN CONNECTED`)
}) ();

// we can use arrow function too
( () => {
    // simple IIFE
    console.log(`CONNECTED THRICE`)
}) ();

// we can variables in such function too
( (name) => {
    console.log(`${name} CONNECTED THRICE`)
}) ("Kalpanaaaa")
