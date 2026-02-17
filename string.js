let name = "Shree"
let age = 18
// console.log(`My name is ${name} and I am ${age} years old`);

const game = new String("Football")

// console.log(game[0]);
// console.log(game.charAt(1));
// console.log(game.charCodeAt(1));
// console.log(game.indexOf("t"));
// console.log(game.lastIndexOf("o"));

// console.log(game.length)
// console.log(game.toUpperCase());
// console.log(game.toLowerCase());

// console.log(game.slice(-3,8));
// console.log(game.substring(0,4));

let newGame = "  Cricket  "
// console.log(newGame.trim());

let url ="https://www.com%2/path?query=123"
// console.log(url.replace("%2","-"));
// console.log(url.includes("com"));
// console.log(url.startsWith("https"));
// console.log(url.endsWith("123"));
// console.log(url.split("/"));

let text = "Hello World \uD800";
// console.log(text.isWellFormed());
// console.log( text.toWellFormed());
// console.log(text.repeat(3));

let a = "5";
// console.log(a.padStart(4,"x"));
// console.log(a.padEnd(4,"0"));

//---------string search----------
let txt = "The rain in SPAIN stays mainly in the plain";
console.log(txt.match("ain"));
console.log(txt.matchAll("i"));