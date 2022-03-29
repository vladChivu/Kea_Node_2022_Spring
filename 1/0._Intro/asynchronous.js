// Why 
// Because Javascript is single-threaded
// You don't want to block your application

// When
// fetching = over the network 
// Browser: Event listeners 
// Converting data: Stream
// File handling
// Databases
// Encryption / decryption
// Basically any thing that takes time and/or has been implemented with a Promise

// Promise why
// To avoid callback hell
// Two states:
// pending
// fulfilled
        // resolved rejected

new Promise((resolve, reject) => {
    try {
        // throw new Error("Oops");
        resolve("Everything went well");
    } catch (customError) {
        reject("Something went wrong" + customError);
    }

})
.then(message => console.log(message))
.catch(errorMessage => console.log(errorMessage));

/* assignment create a function called somethingGoodSomethingBad 
it should return a promise - that is to say that we wrap the function in a promise
BEWARE: you should not handle the promise.. just create a function that returns a promise
    make it take 4 seconds to complete
*/