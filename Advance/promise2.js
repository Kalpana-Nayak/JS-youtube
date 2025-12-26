fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// A fetch() promise only rejects when a network error is encountered. 
// A fetch() promise does not reject on HTTP errors(404, etc). Instead a then() handler must check the Promise.ok and Promise.status properties

// special queue( micro task task queue) specially for fetch() as it has higher priority

// response = fetch("something")
// 2 parts:
// data : onFulfilled[] onRejection[]
// we cam't push data to thses arrays

// web brower/node: network request => if request gets then onFulfilled[function()]