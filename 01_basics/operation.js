let value = 3
let negValue = -value
console.log(negValue)

console.log([2+2, 4-2, 5*3, 18/6, 4**3, 7%3])

let str1 = "Kalpana"
let str2 = "Nayak"
let str3 = str1 + " " + str2
console.log(str3)

console.log([1 + "2", "1" + 2, "1" + 2 + 3, 1+2+"2"]) //12, 12, 123, 32
// If an object is capable of converting to more than one primitive type, it may use the optional hint preferredType to favour that type. 

let count = 100
count++
console.log(count)

let x1 = 3;
const y1 = ++x1;
console.log(x1)
console.log(y1)
// x is 4; y is 4

let x2 = 3;
const y2 = x2++;
console.log(x2)
console.log(y2)
// x is 4; y is 3