function user(email, password){
    this._email = email
    this._password = password
    // how to get/set without class
    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })
}

const user1 = new user("kslpsns@gmail.com", "klpn123")
console.log(user1.email);
console.log(user1.password);

