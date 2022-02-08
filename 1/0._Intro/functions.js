// hoisting 
// greetings();

function greetings() {
    console.log("Hello World");
}

// anonymous function after the equal sign
const greetingsInAVariable = function () {
    console.log("Hello World in a variable");
}

const greetingsArrowFunction = () => {
    console.log("Hello World as an arrow function");
}



function doingSomething(anyFunctionReference, name) {
    // a lot of things can happen here first...
    return anyFunctionReference(name);
}

// doingSomething(running, "Alexander");


const running = name =>`${name} is running`;

const result = doingSomething(running, "Paul");

console.log(result);

// implement using doingSomething:
// drinking and any other action

const drinking = (name) => name + " is drinking.";

console.log(doingSomething(drinking, "Bukowski"));



