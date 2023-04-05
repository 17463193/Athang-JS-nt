const prompt = require("prompt-sync")();

let a = 1;           //global variables
let b = 2;

function add() {
    console.log(a, b);
    let c = 1;       //local variables
    let d = 2;
}