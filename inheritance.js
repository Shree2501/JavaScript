class user{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username is: ${this.username}`);
    }
}
class teacher extends user{
    constructor(username, subject){
        super(username);
        this.subject = subject;
    }   
    teachMe(){
        console.log(`${this.username} teaches ${this.subject}`);
    }
}
const teacher1 = new teacher('mr_smith', 'math');
teacher1.logMe();
teacher1.teachMe();

const user2 = new user('jane_doe');
user2.logMe();
console.log(teacher1 instanceof teacher);