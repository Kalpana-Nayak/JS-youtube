// Javascript is Synchronous, code get executed one block after one block
// Javascript is Single Threaded
// Execution Context:
// execute one line of code at a time 
// call stack
// memory heap

// blocking code: blocks the flow of program
// example: reading a file(Sync)

// non-blocking code: does not block any execution
// example: reading a file(Async)

// both code are required according to the use-cases: 
// e.g. Registration Successful after checking every field

//JS Engine: Call Stack + Memory Heap
// Web API: DOM API + Set timeout + Set interval + fetch()
//Async -> Set timeout -> register CALL BACK -> Task Queue -> Added to Call Stack
// fetch() -> priority queue(FIFO) -> higher priority queue gets into the -> call stack(LIFO)

