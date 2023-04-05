    const prompt = require("prompt-sync")();
    let name = prompt("Enter Name:\t");
    let age = parseInt (prompt("Enter age:\t"));
    let hobbies = prompt("Enter hobbies:\t");

function form(name,age,hobbies) {
    console.log('RESULT:\n');
   
    console.log('Name:'+name);
    console.log('Age:'+age);
    console.log('hobbies:'+hobbies);

   
}
function forms(name,age,hobbies) {
    
    console.log('My name is '+name +' My age is '+age +' years old '+' My hobbies are '+hobbies);
    

   
}
form(name,age,hobbies)
forms(name,age,hobbies)