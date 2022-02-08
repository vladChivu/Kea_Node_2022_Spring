const chicken = {
    sound: "sdfklsdjfklsdf"
};

console.log(chicken.sound, chicken.color);  // dot notation
console.log(chicken["sound"]); // square bracket notation

const numbers = [1, 345, 57, 2, 32];

const newNumbers = numbers.slice();
const newNumbersTwo = [...numbers]


newNumbers.pop();

console.log(numbers);
console.log(newNumbers);
