const prompt = require("prompt-sync")();

let parameter = prompt("Select(add,sub and div:)")
function variable() {

    let a = parseInt(prompt("Enter a value:\t"));
    let b = parseInt(prompt("Enter b value:\t"));
    if (parameter == "addition") {
        add(a, b);
    }
    else if (parameter == "subtraction") {
        sub(a, b)
    }
    else if (parameter == "division") {
        div(a, b)
    }

}
function add(a, b) {
        let sum = a + b;
        console.log('Add answer:\t' + sum);
    

}
function sub(a, b) {
    let sum = a - b;
    console.log('Sub answer:\t' + sum);
}
function div(a, b) {
    let sum = a / b;
    console.log('Div answer:\t' + sum);
}
variable();