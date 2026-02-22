class user{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username is: ${this.username}`);
    }
    static createId(){
        return `123`
    }
}
class teacher extends user{
    constructor(username, subject){
        super(username);
        this.subject = subject;
    }
}

const user1 = new user('Shree');
// console.log(user1.createId());
const teacher1 = new teacher('Mr. Smith', 'Math');
teacher1.logMe();
console.log(teacher1.createId());
