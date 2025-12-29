Object.getOwnPropertyDescriptor(Math)
// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI); // still didn't change

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor);
// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }

Object.create(null)
// can we create our own property and give them hard code value?

const chai = {
    name: "ginger chai",
    price: 250,
    isAvailable: true
}
console.log(Object.getOwnPropertyDescriptor(chai, "price"))
// { value: 250, 
//   writable: true, 
//   enumerable: true, 
//   configurable: true 
//   }

// can we change them?
Object.defineProperty(chai, "name", {
    writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(chai, "name"))

// 12:29 (47th)
