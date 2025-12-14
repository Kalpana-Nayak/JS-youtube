// // array
const myArr = [0, 1, 2, 3, 4, 5, true, "Kalpana"]
console.log(myArr)
// const myArr2 = ["Milk", "Bread", "Cheese", "Butter"]
// const myArr3 = new Array(34, 56, 78, 92)

// // array methods 
// console.log(myArr.toReversed())
// myArr.push(6) // adds 6 to the end of the array
// myArr.pop(3) // only pop the last element added 
// myArr.unshift(10) // adds element in the beginning (very difficult for larger arrays)
// myArr.shift() // deletes the 10 added in the beginning
// // if only shift is used then it shifts the array to the right by deleting the first element
// console.log(myArr)

console.log(myArr.includes("Nayak"))
console.log(myArr.indexOf(5))

// const newArr = myArr.join() // joins the array into string
// console.log(myArr)
// console.log(newArr)
// console.log(typeof newArr)

// slice, splice

const arr = [34, 56, 78, 94, 67]
console.log("A", arr)
const arr2 = arr.slice(1,3)
console.log(arr2)
console.log("B", arr) // array remains the same in slice

const arr3 = arr.splice(1,3) // but in splice removes element from 1-3 index
console.log("C", arr)
console.log(arr3)





