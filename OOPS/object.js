function multiplyBy5(num){
    return num*5
}
const ans = multiplyBy5(5)
console.log(ans) // 25

multiplyBy5.power = 2
console.log(multiplyBy5.power); // 2
console.log(multiplyBy5.prototype); // {} (window object)

// function/array/string -> object -> null

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++;
    console.log(this.score);
    
}

createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}

const user1 = new createUser("Kalpana", 98)
const user2 = new createUser("Kalyani", 100)

user1.printMe() // cannot read properties of undefined (without the new keyword)
user1.increment()

user2.printMe()
user2.increment()

// new
// A new object is created: the new keyword initiates the creation of a new javascript obect.
// A prototype is linked: the newly created object gets linked to the prototype property of the constructor function.
// this means that it has access to properties and methods defined on the constructor's prototype
// The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object.
// If no explicit return value is specified from the constructor. Javascript assumes this, the newly created object, to be the intended return value.
// The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.


