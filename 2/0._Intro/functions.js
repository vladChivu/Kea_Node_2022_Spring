// this works because of hoisting
// console.log(add(2, 8));

function add(x, y) {
    return x + y;
}

                // anonymous function after the equal sign
const addInAVariable = function (x, y) {
    return x + y;
}
                // arow function as a one-liner
const addArrowFunction = (x, y) => x + y;



function doActionWithSomeone(anyFunctionReference, name) {
    // something might happen
    anyFunctionReference(name);
}

const running = (name) => console.log(`${name} is running`);

// console.log(doActionWithSomeone(running, "Anders"));


function doActionWithSomeoneWithReturn(anyFunctionReference, name) {
    return anyFunctionReference(name);
}

const fishing = (name) => `${name} is fishing`;

console.log(doActionWithSomeoneWithReturn(fishing, "Alex"));

doActionWithSomeone(name => (console.log(`${name} is eating`), 'Ines'));

// task implement passing + any action of your choosing 
// task bonus task: implement one of them as a one-liner


