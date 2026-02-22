const user = {
    username: 'john_doe',
    countLogins: 5,
    isSignedIn: true,
    getStatus : function(){
       // console.log(`${this.username}`);
       // console.log(this);
    }
}
// console.log(user.username);
// console.log(user.getStatus());
// console.log(this);

function User(username, countLogins, isSignedIn){
    this.username = username;
    this.countLogins = countLogins;
    this.isSignedIn = isSignedIn;   
    return this;
}
const user1 = new User('alice', 10, true);
const user2 = new User('bob', 3, false);
// console.log(user1.constructor);
// console.log(user2);

function multipleByTwo(num){
    return num * 2;
}
multipleByTwo.power = 2;
// console.log(multipleByTwo(5));
// console.log(multipleByTwo.power);
// console.log(multipleByTwo.prototype);

function createUser(username, score){
    this.username = username;
    this.score = score;
}
createUser.prototype.incrementScore = function(){
    this.score++;
}
createUser.prototype.printMe = function(){
    // console.log(`Score is: ${this.score}`);
}
const userA = new createUser('charlie', 15);
const userB = new createUser('dave', 20);

userA.incrementScore();
userA.printMe();
userB.printMe();

let myHeroes = ["thor", "spiderman", "ironman"];
let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    ironman: "suit",

    getSpidermanPower: function(){
        console.log(`Spiderman's power is ${this.spiderman}`);
    }   
}
Object.prototype.shree = function(){
    // console.log("shree is present in all objects");
}
Array.prototype.heyShree = function(){
//     console.log(`Hello From Shree in Array`);
}

// heroPower.shree()
myHeroes.shree();
myHeroes.heyShree();

// inheritance
const student = {
    homework: 'javaScript',
}
const teacher = {
    makeVideos: true
}
const teachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment: 'javascript assignment',
    fullTime: true,
    __proto__: teachingSupport
}
teacher.__proto__ = student;

Object.setPrototypeOf(teachingSupport, teacher)
// console.log(teacher.homework)
// console.log(teachingSupport.makeVideos)
// console.log(TASupport.isAvailable);

let anotherUser = "Shree     "
String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}
anotherUser.truelength();
"Shree".truelength()
"     Ice     ".truelength()