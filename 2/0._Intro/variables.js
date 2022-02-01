"use strict";

// Bad practice because...
// var globalVariable = "Don't do this";

// Never ever do this
// totalGlobalVariable = "is this okay?";

const memeTop = "Mom: We have Javascript at home";
let memeBottom = "Javascript at home: Node.js";


const meme = {
    points: 43543
};


meme.age = "old";
meme.points += 1;
// console.log(meme);

{
   let someValue = true;
   {
       let someValue = false;
   }
   console.log(someValue);
}

{
    var someValue = true;
    {
        var someValue = false;
    }
    console.log(someValue);
 }

for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        // console.log(i);
    }, 1000);
}

for (var i = 0; i < 4; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}