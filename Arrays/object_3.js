// De-Structuring of Objects

const course = {
    courseName: "JS in Hindi",
    coursePrice: "999",
    courseInstructor: "Hitesh Choudhary"
}
console.log(course.courseInstructor)
// but this this too time consuming if we're printing it again and again

const {courseInstructor: teacher} = course  // we can shorten the name too
console.log(teacher)
// this gives the same result too

// use-case of de-structuring an object in React
// const navbar = ({company}) => {}
// navbar(company = "Kalpana")

// APIs Concept: 
// basically giving your work to another like for example:
// you selecting dish from the Menu card
// and not worrying about the recipe making, grocerry availabe, time taken and all that

// So menu card acts like a API documentatio
// earlier it comes in XML structure but
// today it comes in JSON file

// how JSON looks:
{
    "name": "Kalpana",
    "course": "javascript",
    "price": "free" 
}

// API call from JSON
[
    {},
    {},
    {}
] // APIs are also got in array format
// this array contains objects

// it can be formatted using a json-formator