const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNum = myNumbers.map( (num) => num + 10)
// if we add scope {} then we have to write retuen inside it
console.log(newNum)

//chaining
const newNums = myNumbers
                .map( (num) => num * 10 )
                //now the nums are [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
                .map( (num) => num + 10)
                .filter( (num) => num >= 50 )
console.log(newNums)

// map = operations are performed
// filter = returns only if the condition is true

