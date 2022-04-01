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
// .then(message => console.log(message))
// .catch(errorMessage => console.log(errorMessage));


function somethingGoodSomethingBad() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                throw new Error;
                resolve("Good");
            } catch {
                reject("Bad");
            }
        }, 4000);
    });
}


// IIFE
(async function callMyCustomPromise() {
    try {
        const message = await somethingGoodSomethingBad();
        console.log(message);
    } catch (errorMessage) {
        console.log(errorMessage);
    }
})()

