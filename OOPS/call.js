// browser env: this {window}
// node env: this {}

function SetUsername(username){
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    // SetUsername(username)
    // this.username = username (above function is made for it)

    // SetUsername.call(username) // this one is getting called but still no output for username
    
    // reference holding
    SetUsername.call(this, username)
    this.email = email
    this.password = password
}

const chai = new createUser("Chai", "chai@google.com", "chai123")
console.log(chai);
// createUser { email: 'chai@google.com', password: 'chai123' }
// so the SetUsername(username) is not called so how to do it
// So,   // reference holding has called the SetUsername.call(this, username)
// createUser { username: 'Chai', email: 'chai@google.com', password: 'chai123'}