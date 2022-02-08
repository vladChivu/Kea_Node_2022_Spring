const person = {
    name: "Anders"
};

console.log("Hello my name is", person.name); // dot notation
console.log("Hello my name is", person["name"]); // square bracket notation


const numbers = [1, 34, 35, 456];

// spread operatator
const copiedNumbers = [...numbers];
const anotherCopiedNumbers = numbers.slice();

anotherCopiedNumbers.pop();


