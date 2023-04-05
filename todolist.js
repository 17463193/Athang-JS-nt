const prompt = require("prompt-sync")();

let details = prompt("tasks:");

switch (details) {
    case "wake up":
        console.log("7am");
        break;
    case "eat breakfast":
        console.log("8am");
        break;
    case "go to work":
        console.log("9am");
        break;
    case "eat lunch":
        console.log("1pm");
        break;
    case "over office hour":
        console.log("4pm");

    default:
        console.log("im sorry, you have set time beyound 4pm");

}