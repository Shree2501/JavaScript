const score = 400
// console.log(score);

const balance = new Number(1000)
// console.log(balance);
// console.log(typeof score);
// console.log(typeof balance);
 
let a = 32e5;
let b = 123e-5;
// console.log(a);
// console.log(b);

// console.log(balance.toString());
// console.log(balance.toFixed(2));

let n = 231.4464568
// console.log(n.toFixed(3));
// console.log(n.toPrecision(3));

let hundreds = 1000000
// console.log(hundreds.toLocaleString("en-IN"));

// -------------- Number() method ---------------
// console.log(Number(true))
// console.log(Number(false))
// console.log(Number("10"))
// console.log(Number("10.33"))
// console.log(Number("10,33"))
// console.log(Number("10 33"))
// console.log(Number("John"))
// console.log(Number(new Date("1970-01-01")))

// ----------- ParseInt() method --------------
// console.log(parseInt("-10"))
// console.log(parseInt("-10.33"))
// console.log(parseInt("10"))
// console.log(parseInt("10.33"))
// console.log(parseInt("10 20 30"))
// console.log(parseInt("10 years"))
// console.log(parseInt("years 10"))

// ----------- ParseFloat() method --------------
// console.log(parseFloat("10"))
// console.log(parseFloat("10.33"))
// console.log(parseFloat("10 20 30"))
// console.log(parseFloat("10 years"))
// console.log(parseFloat("years 10"))

// console.log(Number.isSafeInteger(10))
// console.log(Number.isSafeInteger(12345678901234567890))

//------------------ Number Properties ----------------------
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);

let G = Number.MIN_SAFE_INTEGER;
console.log(G);
let g = Number.MAX_SAFE_INTEGER;
console.log(g);

let x =  2 / 0;
let y = -2 / 0;
// console.log(x);   //infinity
// console.log(y);   //-infinity
// console.log(typeof(Infinity))  //number
let r = Number.NaN;
console.log(r);
