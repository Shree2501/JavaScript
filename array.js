const myArray= [2,3,4,5,6,1,7,8,9] ;
// console.log(myArray[3]);
// const arr = new Array(1,2,3,4,5)
// console.log(arr[0]);

//Array Methods
myArray.push(10); // adds 10 at the end
// console.log(myArray);
myArray.pop(); // removes last element
// console.log(myArray);
myArray.shift(); // removes first element
// console.log(myArray);
myArray.unshift(0); // adds 0 at the beginning
// console.log(myArray);

// console.log(myArray.includes(4));
// console.log(myArray.indexOf(5));
// console.log(myArray.lastIndexOf(5));
// console.log(myArray.findLast(x=>x>3));
// console.log(myArray.findLastIndex(x=>x>3));

// console.log(myArray.sort());
// console.log(myArray.reverse());
// console.log(myArray.copyWithin(2,3));

const newArray = myArray.join
// console.log(newArray);
// console.log(typeof newArray);

const myn1 = [1,2,2,3,4,5,6,7,8,9];
// console.log(myn1.slice(2,5));
// console.log(myn1);
// console.log(myn1.splice(2,3));
// console.log(myn1);
// console.log(myn1.toSpliced(2,3));
// console.log(myn1);

const marvel_heroes = ['Ironman', 'Thor', 'Hulk', 'Captain America'];
const dc_heroes = ['Batman', 'Superman', 'Flash'];
//console.log(marvel_heroes.push(dc_heroes));
//const all_heroes = marvel_heroes.concat(dc_heroes);
const all_heroes = [...marvel_heroes, ...dc_heroes];
// console.log(all_heroes);

const array1 = [1,2,3,[4,5,6],[7,[3,4],8,9]];
// console.log(array1.flat(Infinity));

// console.log(Array.isArray("Shree"));
// console.log(Array.from("Shree"));

let score1 = 100
let score2 = 200
let score3 = 300
// console.log(Array.of(score1,score2,score3));

function one(){
    let name = "shree"
    function two(){
        let age = 18
        // console.log(name)
    }
    two()
    // console.log(age) //gives error
}
// one()

if (true){
    const name = "shree"
    if (name === "shree"){
        // console.log(name);
    }
    // console.log(name);
}
// console.log(name);  //gives an error

//-------------- Hoisting ----------------
//console.log(addOne(5))
function addOne(n){
    return n+1
}
//console.log(addTwo(5))  //cannot access before initialization
const addTwo = function(n){
    return n+2
}

carName = "Volvo";
let carName;
console.log(carName); //cannot access before initialization
