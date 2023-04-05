// const prompt = require("prompt-sync")();
// let name = prompt("enter your name:");
// console.log(name);

// const prompt = require("prompt-sync")();

// let number1 = parseInt(prompt("enter your number1:"));
// let number2 = parseInt(prompt("enter your number2:"));

// console.log(number1 + number2);

const prompt = require("prompt-sync")();

console.log("Calculator");
let num1,num2,add,multiply,divide,subtract;
calculator = prompt("Enter what calculation you want to do:");
num1 = parseInt(prompt("Enter 1st number:\t"));
num2 = parseInt(prompt("Enter 2nd number:\t"));

if(calculator == "addition"){
    add = num1 + num2;
    console.log(add);
}
else if(calculator == "multiplication"){
    multiply = num1 * num2;
    console.log(multiply);
}
else if(calculator == "division"){
    divide = num1 / num2;
    console.log(divide);
}
else if(calculator == "substraction"){
    subtract = num1 - num2;
    console.log(subtract);
}
else{
    console.log("wrong Input");
}