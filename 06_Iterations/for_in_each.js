const myObject = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple"
}

// for in loop
// for (const key in myObject) {
//     console.log(key);
// }

// for (const key in myObject) {
//     console.log(myObject[key]);
// }

for (const key in myObject) {
    //console.log(`${key} is for ${myObject[key]}`);
}

const lang = ["js", "python", "c", "java", "cpp", "ruby"]
for (const key in lang) {
    //console.log(key);      // only prints the index
    // console.log(lang[key]);
}

// for each loop
const coding = ["js", "python", "java", "cpp", "ruby"]
// coding.forEach() // this forEach needs a callback function
// callback function doesn't have name
coding.forEach( function (item){
    // console.log(item);
} )

// using arrow function
const programming = ["js", "python", "java", "cpp"]
programming.forEach( (item) => {
    // console.log(item); 
} )

function printMe(item){
    // console.log(item)
}
coding.forEach(printMe)

coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
} )

const myCode = [
    {
        language: "javascript",
        file: "js"
    },
    {
        language: "python",
        file: "py"
    },
    {
        language: "java",
        file: "java"
    }
]
myCode.forEach( (item) => {
    console.log(item.file);
} )