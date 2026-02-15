function sum(n1,n2){
    console.log(n1+n2);
}
// sum(2,4) 

function add(n1,n2){
    return n1+n2
}
const result = add(2,3)
// console.log(result);
                  
function logIn(username){
    if(!username){
        console.log("Please enter a username");
    }
    else
        return `${username} logged in`
}
// console.log(logIn("shree"));

//----rest operator----
function cart(...item){
    return item
}
// console.log(cart(100,200,300,400));

//-------function of object-------
// user = {
//     name: "Shree",
//     age : 18
// }
function objcall(obj){
    console.log(`${obj.name} is ${obj.age} years old`)
}
// objcall(user)
// objcall({
//     name : "Shrey",
//     age:19
// })
