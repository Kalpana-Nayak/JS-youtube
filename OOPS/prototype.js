let myName = 'Kalpana'
console.log(myName.length);

let myNameIs = 'Kalpana      '
console.log(myNameIs.truelength); // undefined

// So our goal is to make a method that will give us true length

let myHero = ["hulk", "spidey"]
let heroPower = {
    hulk: "body",
    spidey: "sling",
    getSpiderPower: function(){
        console.log(`spidey power is ${this.spidey}`);
    }
}

Object.prototype.kalpana = function(){
    console.log(`Kalpana is present in all objects`);
    
}
heroPower.kalpana()
myHero.kalpana()

// what we did?
// we injected a property in OBJECT 
// and that property slide into function/array/string (we can access)
// Object -> function/array/string (✔️)

// Now we want to do the reverse: if we inject a property inside the ARRAY, Can it be access inside an OBJECT
// array -> Object (❌)

Array.prototype.heyKalpana = function(){
    console.log(`Kalpana said hello`);
}
myHero.heyKalpana() 
// Kalpana said hello
// heroPower.heyKalpana() // didn't run
// why? : heroPower is an object

// INHERITANCE
const Teacher = {
    isAvailable: true
}
const TeachingSupport = {
    fulltime: false,
    language: 'english'
}
Object.setPrototypeOf(TeachingSupport, Teacher)

// Now let's go to our GOAL in Line 7
let anotherUsername = "Chai Aur Code       "
String.prototype.trueLength = function(){
    console.log(`${this}`); // current context
    console.log(`True Length is: ${this.trim().length}`);
}
anotherUsername.trueLength()
"     Kalpana Nayak   ".trueLength()