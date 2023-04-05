const prompt = require("prompt-sync")();



let user_array=[];
let password_array=[]

let answer;

do {
    let users = prompt("Signup or Login?:\t");

    if (users == "Signup" || users == "signup") {
        username1 = prompt("Username:\t");
        let password = prompt("Password:\t");
        let cpassword = prompt("Confirm password:\t")

        if (password === cpassword) {
            user_array.push(username1)
            password_array.push(password)
           
            
            console.log("SIGNUP SUCCESSFULL!");
        }
        
       
        else if(password == cpassword){
            user_array.push(username1)
                password_array.push(password)
            
             console.log("SIGNUP SUCCESSFULL!");
        } 
    //     else if(password == cpassword && count == 3){
    //         user2 = username;
    //      mainpassword2 = password;
       
    //      console.log("SIGNUP SUCCESSFULL!");
    // } 

        else {
            console.log("PASSWORD MISMATCH");
        }

    }

    else if (users == "Login" || users == "login") {
        username1 = prompt("Username:\t");
        let password = prompt("Password:");

        if (user_array.includes(username1)) {
            console.log("LOGIN SUCCESSFULL!");
        } else {
            console.log("LOGIN FAILED!");
        }
    }


    else {
       console.log("wrong input!");
    }
    answer = prompt("Do you want to use service again(yes/no)");
} while (answer == "yes")