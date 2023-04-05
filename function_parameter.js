//Defualt variables\\
// function calculate(a=1,b=2) {
//     let sum = a+b;
//     console.log(sum);
// }
// calculate();

function calculate(a, b)/*defualt variable*/ {
                         //local variable\\
                          //the value wont be rplaced\\
    let sum = a + b; 
    return sum; //will return the value of sum to calculate function\\
}
console.log(calculate(9, 5)); //assigning variables using parameter\\