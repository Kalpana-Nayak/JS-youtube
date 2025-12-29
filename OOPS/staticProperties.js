class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }
    static createId(){
        return `123`       
        // now after using static keyword this function can't be accessed
    }
    createIde(){
        return `456`
    }
}
const kalpana = new User("Kalpana")
kalpana.logMe()
console.log(kalpana.createIde())
// console.log(kalpana.createId())

class Teacher extends User {
    constructor(username, email){
        super()
        this.email = email
    }
}
const iphone = new Teacher("iphone","i@phone.com")
console.log(iphone.createIde);
