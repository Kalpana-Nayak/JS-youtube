let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)  //object

let newDate = new Date(2025, 12, 23)
console.log(newDate.toDateString())   //Fri Jan 23 2026 because months starts from 0-11


let anotherDate = new Date(2025, 0, 23, 5, 3)
console.log(anotherDate.toLocaleString())  

let date1 = new Date("2025-01-14")  //yyyy-mm-dd
console.log(date1.toDateString())  //here moths start with 01

let date2 = new Date("01-14-2025")  //mm-dd-yyyy
console.log(date2.toLocaleDateString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)   //from 1970 till now

console.log(date2.getTime())

console.log(Math.floor(Date.now()/1000))

let createdDate = new Date()
console.log(createdDate)
console.log(createdDate.getMonth() + 1)
console.log(createdDate.getDay())

// ${createdDate.getDay()}

createdDate.toLocaleString('default', {
    weekday: "long",
})
