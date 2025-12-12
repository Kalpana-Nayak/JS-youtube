let score = 33
console.log(typeof score)
console.log(typeof (score))

let score2 = "45abc"
console.log(typeof (score2))
let valueInNumber = Number(score2)  //converted to number => 45
console.log(typeof valueInNumber) // type => string
console.log(valueInNumber)  //NaN(not a number)

//33 => 33
//"45abc" => NaN
//true => 1; false => 0

let isLoggedIn = ""
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)   //1 => true

//0 => false
//"" => false
//"Kalpana" => true

let someNumber = 98
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)
