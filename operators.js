let a=3
let b=2

let n=-a
// console.log(n)

//*****Arithmetic Operators*****//
// console.log("Addition:", a+b)
// console.log("Subtraction:", a-b)
// console.log("Multiplication:", a*b)
// console.log("Division:", a/b)
// console.log("Modulus:", a%b)
// console.log("Exponentiation:", a**b)

//*****Assignment Operators*****//
// console.log("Increment:", ++a)
// console.log("Decrement:", --b)

//*****Comparison Operators*****//
// console.log("Comparison a>b:", a>b)
// console.log("Comparison a<b:", a<b)
// console.log("Equality a==b:", a==b)
// console.log("Inequality a!=b:", a!=b)

//*****Logical Operators*****//
// console.log("Logical AND (a>b && a<b):", (a>b && a<b))
// console.log("Logical OR (a>b || a<b):", (a>b || a<b))
// console.log("Logical NOT (!(a>b)):", !(a>b))

//concatenation
let firstName="Shree"
let lastName="Sharma"
let fullName=firstName + " " + lastName
// console.log("Full Name:", fullName)

// console.log("1"+2)
// console.log(1+"2")
// console.log(1+2+"2")
// console.log("1"+2+2)
 
//*****Special Cases*****//
// console.log(null==0); //false
// console.log(null>0); //false
// console.log(null<0); //false
// console.log(null>=0); //true
// console.log(undefined==0); //false
// console.log(undefined===undefined); //true
// console.log(undefined>0); //false
// console.log(undefined<0); //false
// console.log(undefined>=0); //false
// console.log(NaN===NaN); //false

let x = true;
let y = x &&= 10;
console.log("Logical AND Assignment (x &&= 10):", y);

let p = false;
let q = p ||= 20;
console.log("Logical OR Assignment (p ||= 20):", q);    

let r=null;  
r ??= 10;
console.log("Nullish Coalescing Assignment (r ??= 10):", r);

