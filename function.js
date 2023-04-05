const prompt = require("prompt-sync")();

let a, b, result;

a = parseInt(prompt("Enter a value:\t"));
b = parseInt(prompt("Enter b value:\t"));

function addition() {
    result = a + b;
    console.log("value a + value b :\t"+result);
}
function sub() {
    result = a - b;
    console.log("value a - value b :\t"+result);
}
function mul(){
    result = a * b;
    console.log("value a * value b :\t"+result);
}
function div(){
    result = a / b;
    console.log("value a / value b :\t"+result);
}
addition();
sub();
mul();
div();