// -------------- Creating Objects ----------------
const mySym = Symbol("mySymbol");
obj = {
    name: "Alice",
    "full name": "Alice Johnson",
    [mySym] : "key1",
    age: 30,
    city: "New York"    
}
// console.log(obj.name); 
// console.log(obj["name"]);
// console.log(obj["full name"]);
// console.log(obj[mySym]);
// console.log(typeof obj[mySym]);

//--------------- Object Methods ------------------
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

// console.log(obj.hasOwnProperty(["age"])); // true
// console.log("age" in obj); // true

// -------------- Object Freeze Method -------------
// obj.name = "Bob";
// Object.freeze(obj);
// obj.name = "Charlie"; // won't work due to freeze
// console.log(obj);

//function as Object Property
obj.greeting = function() {
    console.log("Hello JS user");
}
// console.log(obj.greeting());   
obj.greet = function() {
    console.log(`Hello, ${this.name}`)
}
// console.log(obj.greet());

// -------------- Nested Objects ----------------
details = {
     fullname :{
        userFullName:{
            firstName: "John",
            lastName: "Doe"
        }
     }
}
// console.log(details.fullname.userFullName.firstName);

//--------------- Merging Objects -----------------
const obj1 = {1:"a", 2:"b", 3:"c"};
const obj2 = {4:"d", 5:"e", 6:"f"};
const obj3 = Object.assign({},obj1, obj2);
// console.log(obj3);
const obj4 = {...obj1, ...obj2};
// console.log(obj4);

// -------------- Array of Objects ----------------
arr = [
    {id:1, name:"Alice"},
    {id:2, name:"Bob"},
    {id:3, name:"Charlie"}
]
// console.log(arr[1].name);

// -------------- Object Destructuring ----------------
const userDetails = {
    id: 101,
    username: "Shree",
    email: "shree@25",
    country: "India"
}
const {id,username,email,country} = userDetails;
// console.log(id);
// console.log(username);
// console.log(email);
// console.log(country);
const {username: user} = userDetails;
// console.log(user);

const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
// Stringify Object
let text = JSON.stringify(person);
console.log(text);
