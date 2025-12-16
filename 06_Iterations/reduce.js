const myNums = [1, 2, 3]
const myTotal = myNums.reduce(
    function(accumulator, currentValue){
        console.log(`acc: ${accumulator} and curr: ${currentValue}`);
        
        return accumulator + currentValue
    }, 0 // accumulator takes this value first
)
console.log(myTotal); // 6


// in arrow function
const myResult = myNums.reduce( (acc, curr) => (acc + curr), 0 )
console.log(myResult);

const ShoppingCart = [
    {
        item: "JS Course",
        price: 99
    },
    {
        item: "Python Course",
        price: 299
    },
    {
        item: "Data Science Course",
        price: 1299
    }
]
// now add all the prices in the shopping cart
const priceToPay = ShoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(priceToPay)
