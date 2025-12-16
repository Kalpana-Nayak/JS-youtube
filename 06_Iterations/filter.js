const subject = ["OS", "TOC", "AIML", "DMDW", "ISE", "PEE"]
const values = subject.forEach( (item) => {
                console.log(item)
                return item
               } )
console.log(values); // undefined (doesn't return any value)

const myNum = [1,2,3,4,5,6,7,8,9,10]
let newNum = myNum.filter( (num) => num > 5 )
// filter( return vake => condition)
console.log(newNum);

let anotherNum = myNum.filter( (num) => {
    return num > 7
} )
console.log(anotherNum);

// same result in forEach method
const againNum = []
myNum.forEach( (num) => {
    if(num > 9){
        againNum.push(num)
    }
} )
console.log(againNum);

// Book Example
const books = [
    {
        title: "Book One", 
        genre: "Fiction",
        publish: 1982,
        edition: 2004
    },
    {
        title: "Book Two",
        genre: "Non-fiction",
        publish: 2025,
        edition: 2025
    }
]
const userBooks = books.filter( (bk) => bk.genre === "Non-fiction" )
console.log(userBooks);




