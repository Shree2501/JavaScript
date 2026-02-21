function setUserName(username){
    this.username = username;
    console.log("called");
}

function createuser(username, email, password){
    setUserName.call(this, username);
    this.email = email;
    this.password = password;
}

const user1 = new createuser('john_doe', 'john@example.com', 'password123');
console.log(user1);