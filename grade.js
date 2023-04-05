const prompt = require("prompt-sync")();

do {
    let grade = parseInt(prompt("Enter your grade: "));

    if (grade <= 100 && grade >= 90) {
        console.log("\nGrade A");
    }
    else if (grade <= 89 && grade >= 60) {
        console.log("\nGrade B");
    }
    else if (grade <= 59 && grade >= 30) {
        console.log("\nGrade C");
    }
    else if (grade <= 29 && grade >= 10) {
        console.log("\nGrade D");
    }
    else if (grade <= 10 && grade >= 1) {
        console.log("\nGrade E");
    }
    else if (grade <= 0) {
        console.log("\nGrade F");
    } else {
        console.log("Your grade number is between 1 - 100");
    }
    an = prompt("You want to use these service again? yes/no?")
} while (an == "yes");