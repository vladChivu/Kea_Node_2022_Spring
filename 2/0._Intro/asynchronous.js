// Why
// Javascript is single-threaded
// We don't want to block our application

// When
// over the network: for instance fetch
// file handling
// setTimeout / setInterval
// databases

// Promise state
// pending
// fulfilled
    // resolved rejected
 
new Promise((resolve, reject) => {
    try {
        // throw new Error("bomb!");
        resolve("Everything went well");
    } catch (errorMessage) {
        reject("Something went wrong " + errorMessage);
    }

})
.then(message => console.log(message))
.catch(errorMessage => console.log(errorMessage));

/* assignment
create a function called somethingGoodSomethingBad 
it should return a promise 
[- that is to say that we wrap the function in a promise]
BEWARE!!!: you should not handle the promise.. just create a function that returns a promise

 make it take 4 seconds to complete

*/
