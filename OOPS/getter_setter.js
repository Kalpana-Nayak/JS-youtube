class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }
    
    get password(){
        // return this._password.toUpperCase()
        return `${this._password}abc`
        // _password -> almost a private property
    }
    set password(value){
        this._password = value
        // No return in setters
        // Maximum call stack size exceeded
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

}
const userOne = new User("kalpana@gmail.com", "kalpana1")
console.log(userOne.password);
console.log(userOne.email);

