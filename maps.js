const map = new Map()
map.set("IND","India")
map.set("USA","United States of America")
map.set("UK","United Kingdom")
//console.log(map);

for (const [key,values] of map){
    //console.log(key, ":-", values);
}

const myNumers = [1,2,3,4,5,6,7,8,9,10]
const newNumers = myNumers
                    .map((num) => num*10)
                    .map((num) => num+1)
                    .filter((num) => num>50)
// console.log(newNumers);

// Create a Map
const fruit = new Map();
// Set Map Values
fruit.set("apples", 500);
fruit.set("bananas", 300);
fruit.set("oranges", 200);
console.log(fruit);

// get Map values
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
// console.log(fruits.get("apples"));

// console.log(fruits.size);
// fruits.delete("bananas");
// console.log(fruits);
// console.log(fruits.has("bananas"));
// fruits.clear();
// console.log(fruits);

let text = "";
for (const x of fruits.entries()) {
  text += x;
}
console.log(text);

let txt = "";
for (const x of fruits.keys()) {
  txt += x;
}
console.log(txt);

let tx = "";
for (const x of fruits.values()) {
  tx += x;
}
console.log(tx);
