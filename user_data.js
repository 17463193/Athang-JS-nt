const prompt = require("prompt-sync")();

console.log("\t  USER DATA\n");

let user = [];

let answer;
console.log('1. Add user');
console.log('2. Remove the last user');
console.log('3. View users');
do {
    let users = prompt("SELECT:");

    if (users == 1) {
        console.log('ADD USER:\n');
        for (i = 0; i <= 4; i++) {
            user.push(prompt("Enter Username:"));
        }
        console.log("User entered successful!");
    }
    else if (users == 2) {
        console.log('REMOVE USER:\n');
        user.pop();
        console.log("User removal successful!");

    }
    else if (users == 3) {
        console.log('VIEW USER:\n');

        console.log(user);
    }
    else {
        console.log("User not entered!!!");
    }
    answer = prompt('want to countinue(yes/no):')
} while (answer == 'yes')

