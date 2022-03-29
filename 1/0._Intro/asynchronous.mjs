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


function somethingGoodSomethingBad() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                throw Error;
                resolve("Good");
            } catch (stackTrace) {
                reject("Bad");
            }
        }, 4000);
    });
}


// const goodOrBad = await somethingGoodSomethingBad();
// console.log(goodOrBad);

// IIFE
(async function getCondition() {
    try {
        const goodOrBad = await somethingGoodSomethingBad();
        console.log(goodOrBad);
    } catch (itWentWrong) {
        console.log(itWentWrong);
    }
})()

