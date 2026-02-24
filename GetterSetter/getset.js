class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(newEmail){
        this._email = newEmail
    }
    get password(){
        return `${this._password}****`
    }
    set password(newPassword){
        this._password = newPassword
    }
}
const user1 = new User("shree@25","1234")
// console.log(user1.email);
// console.log(user1.password);

function user(email, password){
    this._email = email
    this._password = password
    
    Object.defineProperty(this, "email",{
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(newEmail){
            this._email = newEmail
        }
    })
    Object.defineProperty(this, "password",{
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(newPassword){
            this._password = newPassword
        }
    })
}
const user2 = new user("shree@25","abc")
console.log(user2.email);
console.log(user2.password);