class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is: ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
        // super(username) Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    }
    addCourse(){
        console.log(`New course was added by ${this.username}`);
    }
}
const chai = new Teacher("Kalpana", "kalpana@microsoft.com", 'micro123')
chai.addCourse()

const tea = new User("Kalyani")
// tea.addCourse() // doesn't have access
tea.logMe()

console.log(chai === Teacher); // false
console.log(chai instanceof Teacher); // true
console.log(chai instanceof User); //  true

// 19:12


