const MyDate = new Date();
// console.log(MyDate);
// console.log(typeof MyDate);

// console.log(MyDate.toString()); 
// console.log(MyDate.toDateString());
// console.log(MyDate.toTimeString());
// console.log(MyDate.toISOString());
// console.log(MyDate.toJSON());
// console.log(MyDate.toLocaleDateString());
// console.log(MyDate.toLocaleTimeString());
// console.log(MyDate.toLocaleString());

// console.log(MyDate.getFullYear());
// console.log(MyDate.getMonth());
// console.log(MyDate.getDate());

// const myCreatedDate = new Date(2022,0,4,15,23,5);
const myCreatedDate = new Date("2025-09-15");
console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(Math.floor(myTimeStamp/1000));
console.log(myCreatedDate.getTime());
