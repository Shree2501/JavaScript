const { use } = require("react");

const user={
    username : "Shree",
    Age : 18,
    welcome : function(){
        console.log(`${this.username}, welcome to website`);
    }
}
// user.welcome()
// user.username="Sam"
// user.welcome()
// console.log(this);

// arrow operator
let myFunction = (a, b) => a * b;
// console.log(myFunction(2,4));

let hel = () => "Hello World!";

let hello = () => {
    return "Hello World!";
}
// console.log(hello());

let hey= (val) => "Hello " + val;
// console.log(hey("World"));

(function user(){
    console.log("Hey Shree!");
})();

((name) => {
    console.log(`The name is ${name}`);
})("Shree")
