// ------------------------ forEach -----------------------------
const coding = ["JS","Python","C","C++"]
coding.forEach( function (val) {
   // console.log(val);  
})

function printMe(item){
    // console.log(item);  
}
coding.forEach(printMe)

coding.forEach( (item,index,arr) => {
   // console.log(item,index,arr); 
})

// ----------------------- filter --------------------------
const myCoding = [
    {
        "language":"Python",
        "filename":"py"
    },
    {
        "language":"Java",
        "filename":"java"
    },
    {
        "language":"C++",
        "filename":"cpp"
    }
]
myCoding.forEach((item) => {
   // console.log(item.language);
})

const myNums = [1,2,3,4,5,6,7]
// const newNums = myNums.filter((nums) => nums>5)
// console.log(newNums)

const newNums = myNums.filter((nums) => {
    return nums>5
})
// console.log(newNums)

const newNum = []
myNums.forEach( (nums) =>{
    if(nums>5){
        newNum.push(nums)
    }
})
// console.log(newNum);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
let userBook = books.filter((bk) => {return bk.genre==="History"})
// console.log(userBook);
userBook = books.filter((bk) => bk.publish>=1990 && bk.genre==="History")
// console.log(userBook);

// Some Method
const myIterator = Iterator.from("123456789");
let result = myIterator.some(x => x > 7);
// console.log(result);

// every method
const myItr = Iterator.from("123456789");
let res = myItr.every(x => x > 7);
// console.log(res);

// find method
const Itr = Iterator.from([3, 10, 18, 30, 20]);
let r = Itr.find(x => x > 15);
// console.log(r);

// drop method
const myitr = Iterator.from([1, 2, 3, 4, 5, 6]);
const firstFive = myitr.take(5);
console.log(firstFive);
