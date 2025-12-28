// const user = {
//     username: "Kalpana",
//     loginCount: 8,
//     signedIn: true,
//     getUserDetails: function(){
//         console.log("Got all the details from database");
//         console.log(`Username: ${this.username}`);
//         // console.log(this);
        
//     }
// }
// console.log([user.username, user.loginCount, user.signedIn]);
// console.log(user.getUserDetails());
// console.log(this);  // {} : window object (checked in browser inspect)

function userOne(username, loginCount, isLoggedIn){
    this.usernamen = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.greeting = function(){
        console.log(`Welcome ${username}`);   
    }
    return this
}
const user1 = new userOne("Kalpana", 12, true)
const user2 = new userOne("Kalyani", 13, false)
// new keyword => constructor function
console.log(user1)
console.log(user2)
console.log(user1.constructor)