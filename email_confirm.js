const prompt = require("prompt-sync")();
let mainname, maincode, mainsubject, mainmessage;



console.log("\tWELCOME TO EMAIL\n");


function Email() {
    console.log("   Email   ");
   
  
    let name1 = prompt("Enter email:\t");
        
    let name2 = prompt("Confirm email:\t");
 
     if (name1 == name2)    {
         if (name1.includes ('@gmail.com')){
        
          
            console.log("Email successfull");
        }
        else {
            console.log("Wrong input! it should includes @gmail.com");
        }
    } else {
        console.log("confirmation failed!!!");
    }
}
Email();

