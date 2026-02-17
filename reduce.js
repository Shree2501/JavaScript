const myNums = [1,2,3,4]
// const myTotal = myNums.reduce(function(prev,curr) {
//     console.log(`prev: ${prev} , curr: ${curr}`);
//     return prev + curr
// },0)
// console.log("Total : ",myTotal);
const myTotal = myNums.reduce((prev,curr) => prev + curr,0)
// console.log("Total : ",myTotal);

const shoppingCart =[
    {
        itemName : "Rice",
        price : 200
    },
    {
        itemName : "Flour",
        price : 400
    },
    {
        itemName : "Sugar",
        price : 50
    }
]
const Bill = shoppingCart.reduce((acc,item) => acc+item.price,0)
console.log("Your total",Bill);
