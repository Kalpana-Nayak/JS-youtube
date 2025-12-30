const User = {
    _email: "kalpana@gmail.com",
    _password: "klpn@123",

    //define getter and setter
    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}
const user1 = Object.create(User)
console.log(user1.email);

// getter and setter are 2 methods that are kept above properties like email, password

// get => memory se leke aao
// set => stores inside value


// ES22: if # is being used -> it can't be accessed
// for example -> #email