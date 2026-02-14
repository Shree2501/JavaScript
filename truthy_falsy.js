// truthy values
// "0", " ", "false", [], {}, function(){}

//falsy values
// 0, -0, "",null, false, undefined, Nan, BigInt 0n

//empty array
const username = []
if(username.length === 0){
    //console.log("Array is empty");
}

//object empty
const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    //console.log("Object is empty");
}

// -------- Nullish coallescing operator : ?? ----------
let n1;
// n1 = null ?? 10
// n1 = undefined ?? 5
n1 = null ?? 10 ?? 20
// console.log(n1);

//---------- ternary operator ----------
// (conditionn) ? true : false
let a = 3
a%2!=0 ? console.log("Odd") : console.log("Even");
 
