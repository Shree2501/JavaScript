// -------------------------- for loop -----------------------------
const arr = [1,2,3,4,5]
for (let i=0 ; i<=arr.length-1 ; i++)
{
    // console.log(arr[i]);
}

// ---------------------- for of loop -----------------------------
const fruits = ['Apple', 'Banana', 'Orange'];
for (x of fruits) {
  // console.log(x);
}
const greeting = "Hello World"
for (const greet of greeting){
    //console.log(`Each char: ${greet}`);
}

// ------------------------ for in loop -------------------------
const fruit = ['Apple', 'Banana', 'Orange'];
for (x in fruit) {
  // console.log(x);
  // console.log(fruit[x])
}

const myObject = {
    "js":"JavaScript",
    "cpp":"C++",
    "py":"Python"
}
for (const key in myObject){
   // console.log(`${key} shortcut is for ${myObject[key]}`);
}

// -------------------- nested for loop -----------------------
for(let i=1 ; i<=5 ; i++){
    for(let j=1 ; j<=5 ; j++){
        //console.log(i*j);                                                                 
    }
}     

// ---------------------- break --------------------------
for(let i=1 ; i<=5 ; i++)
{
    if(i==3){
        break;
    }
    //console.log(i);
}

// ------------------------- continue -----------------------------
for(let i=1 ; i<=5 ; i++)
    {
        if(i==3){
           continue;
        }
        //console.log(i);
    }
    
// ------------------------ while loop --------------------------
let a = 3
while(a <= 9){
    //console.log(a);
    a=a+2
}

let myArray = ["Thor","Ironman","Hulk"]
l=0
while(l<myArray.length){
    //console.log(myArray[l])
    l=l+1
}

// ---------------------- do-while loop ------------------------
let score = 100
do{
    //console.log(score);
    score+=100
}while(score<=500)