// shopping cards
// where we don't know how many arguments will come in the way

function calculateCartPrice(...num1){  //rest operator used
    return num1
}
console.log(calculateCartPrice(2))
console.log(calculateCartPrice(200, 400, 600)) // 200
// only first element is printed
// to avoid this we used rest operator (...) just like spread => depend upon the use case
// ... helps to pass multiple values to the function

function calculateCart2Price(val1, val2, ...num1){  //rest operator used
    return num1
}
console.log(calculateCart2Price(200, 400, 600, 2000, 4500)) // [ 600, 2000, 4500]
// as 200 goes to val1, 400 goes to val2, and rest are in ...num1

const user = {
    username: "Kalpana",
    price: 199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is: ${anyObject.price}`)
}
handleObject(user)
handleObject({
    username: "Sam",
    price: 799
}) // we can pass object during function call too, similarly we can pass array too

const myNewArray = [200, 400, 300, 500]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))
// passing array
console.log(returnSecondValue([200, 400, 300, 500]))