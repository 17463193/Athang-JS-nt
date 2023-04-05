const prompt = require("prompt-sync")();
let users = [];
let answer;

for (i = 0; i <= 4; i++) {
    users.push(prompt("Enter 5 Users:"));
}

do {
    
    let number = parseInt(prompt("Enter number:"));
    console.log(users[number]);
    answer = prompt("want to continue:")

} while (answer == "yes");