const prompt = require("prompt-sync")();
console.log("BANK OF BHUTAN\n");

let amount = 80000;
console.log("Hi sir! Your acount balance is\t" + amount);

let bank = prompt("SELECT(Loan,Withdrawal & Deposit,Net Profit):");
let answer;
do{


   

if (bank == 1) {
    console.log("Welcome to Loan");
    let name = prompt("Enter Name:\t");
    let amount = parseInt(prompt("Enter Amount:\t"));
    console.log("Interest in year 15%");
    let duration = parseInt(prompt("duration in year:\t"));

    console.log("\nHi! " + name + " " + "this is the result:");

    let monthly = (amount * 0.15) / 12
    console.log("Monthly:\t" + monthly);

    let total = (amount * 0.15 * duration);
    console.log("Total:\t" + total);
   


}
else if (bank == 2) {
    console.log("Withdrawal or Deposit?");
    let opt = prompt("SELECT(Withdrawal OR Deposit):")
    if(opt == "withdraw"){
        let name = prompt("Enter name:\t");
    let Wamount = parseInt(prompt("Enter Withdraw amount:\t"));

    if (Wamount <= 80000) {
        let Tremaining = (amount - Wamount);
        console.log("Dear coustmer Your Ramaining Amount is:  " + Tremaining);

    } else (
        console.log("you Dont have this much ammount")
    )
}
    else if(opt == "deposit"){
    let Damount = parseInt(prompt("Enter Deposit amount:\t"));
    let Tamount = (amount + Damount);
    console.log("Total Amount\t:" + Tamount);
    }

}

else if (bank == 3) {
    console.log("My Net Profit");
    let name = prompt("Enter name:\t");
    let TotalAmount = parseInt(prompt("Enter Total amount:\t"));
    let duration = parseInt(prompt("Enter duration:\t"));
    console.log("Interest you get 5%");

    console.log("\nHi! " + name + " " + "this is the result:");

    let Profit = (TotalAmount * 0.5)
    console.log("Profit:\t" + Profit);

    let total = (TotalAmount + Profit);
    console.log("Total:\t" + total);
}

else {
    console.log("You cannot select beyound 1,2and3");
}
answer= prompt("Do you want to use service again(yes/no)");
}

while(answer == "yes");