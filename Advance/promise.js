// // promise => task gets complete in the future
// // 3 states of promise:
// // pending, fulfilled, rejected
// // promises get cosumed also

// const { use } = require("react");

// // fetch('https://something.com').then().catch().finally()
// // then( returns Responses)
// // catch( returns Errors)
// // finally( eventually runs)

// // promise is an Object representing the eventual completion or failure of an asynchronous operation

// // Promise creation + Promise consumption
// const promiseOne = new Promise(function(resolve, reject){
//     //Do an async task
//     // DB calls, cryptography, network
//     setTimeout(function(){
//         console.log("Async Task is complete");
//         resolve()    // connecting resolve and .then
//     }, 1000)
// })

// // resolve ka connection hai .then() k sath
// // .then() gives a call back function
// promiseOne.then(function(){
//     console.log("Promise Consumed");
// })



// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     }, 1000);
// }).then(function(){
//     console.log("Async 2 resolved");
    
// })

// third promise
// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "Chai",
//                 email: "kalpana@g.com"
//         })
//     }, 1000);
// })

// promiseThree.then(function(user){
//     console.log(user);
// })


// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true // if false
//         if(!error){
//             resolve({username: "Kalpana", password: 1234})
//         }
//         else{
//             reject("ERROR: Something went wrong")
//         }
//     }, 1000);
// })

// promiseFour
// .then((user) => {
//     console.log(user)
//     return user.username
// })
// .then((username) => {    // chaining = database connection
//     console.log(username);
    
// })
// .catch(function(error){
//     console.log(error);

// })
// .finally(() => {console.log("The promise is either resolved or rejected");
// })

const PromiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        // if false then only promise five will get consumed otherwise not unless we use try-catch block
        if(!error){
            resolve({username: "JS", password: 4567})
        }
        else{
            reject("ERROR: JS went wrong")
        }
    }, 1000);
})

// PromiseFive.then

// async function consumePromiseFive(){
//     const response = await PromiseFive
//     console.log(response);   
// }
// consumePromiseFive()

async function consumePromiseFive(){
    try {
        const response = await PromiseFive
        console.log(response);  
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()


// async function getAllUser() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users")
//     const data = response.json()
//     console.log(data);
// }
// getAllUser()

// // output:
// // Promise { <pending> }
// // ERROR: JS went wrong

// // now let wrap it in try catch
async function getAllUser() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        // console.log(response)
        const data = await response.json() // we need to await the response.json (for formatting)
        console.log(data);
    }
    catch (error) {
        console.log( "E: ",error);
    }
}
getAllUser()

// still we didn't get any data 
// we need to await the formatting


// if i have to write it in .then .catch way
fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
    return response.json
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})
