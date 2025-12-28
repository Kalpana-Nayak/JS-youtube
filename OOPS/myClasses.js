// ES6

class User {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }
    encryptPassword(){
        return `${this.password}abc`
    }

    capitaliseUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("Chai", "chai@google.com", "chai455")
console.log(chai);
console.log(chai.encryptPassword());
console.log(chai.capitaliseUsername());


// behind the scene
function userNew(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}
userNew.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
userNew.prototype.capitaliseUsername = function(){
    return `${this.username.toUpperCase()}`
}
const tea = new User("tea", "tea@google.com", "tea455")
console.log(tea);
console.log(tea.encryptPassword());
console.log(tea.capitaliseUsername());