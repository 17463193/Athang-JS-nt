const prompt = require("prompt-sync")();
let mainname, maincode, mainsubject, mainmessage;



console.log("\tWELCOME TO EMAIL\n");


function user() {


    let name = prompt("SEND OR RECIEVED?:");
    if (name == "send" || name == "Send") {
        let name1 = prompt("Enter Name:\t")
        let code = prompt("Enter code:\t")
        let subject = prompt("Enter subject:\t")
        let message = prompt("Type Message:\t")



        if (message.length <= 20) {
            mainname = name1;
            maincode = code;
            mainsubject = subject;
            mainmessage = message;
            console.log("Email has been sent...");
        }


    }
    else {
        console.log("Email not Send, since message is too long!");
    }
}
function recieve() {

    let name = prompt("SEND OR RECIEVED?:");
    if (name == "Recieve" || name == "recieve") {
        let name2 = prompt("Name:\t");
        let code2 = prompt("Code:\t")

        if (name2 == mainname && code2 == maincode) {
            console.log("Subject:" + mainsubject + "Message:" + mainmessage);

        }

    }
    else {
        console.log("Invail!!!");
    }
}

user();
recieve();