const prompt = require("prompt-sync")();

let a = 1;
let b = 2;
let c = 3;
let d = 4;

if(a<b){
    console.log("excuted a");
    if(c>d){
      console.log("excute c");
    }
    else{
        console.log("excute d");
    }
}
else{
    console.log("excuted b");
}
// let name = prompt('Enter your fullname: ');
// let age = parseInt(prompt('age:'));
// let CID = parseInt(prompt('CID:'));
// let eng = parseInt(prompt('eng marks:'));
// let dzo = parseInt(prompt('dzo marks:'));
// let math = parseInt(prompt('math marks:'));
// let fees = parseInt(prompt('fees:'));

// let percentage = (eng + dzo + math) / 3;

// if (Grade == '1') {
//     if (percentage >= 60 && fees == 25000) {
//         console.log("Admission successfull!")
//         console.log("Age: " + age + " Cid: " + CID + "percentage: " + percentage);

//     } else (
//         console.log("Admission Failed! since your percentage is not upto our expectation(60%) ")

//     )


// } else if (Grade == ' 2') {
//     if (percentage >= 40 && fees == 30000) {
//         console.log("Admission successfull! ")
//         console.log("Age: " + age + " Cid: " + CID + "percentage: " + percentage);

//     } else (
//         console.log("Admission Failed! since your percentage is not upto our expectation(40%) ")

//     )


// } else if (Grade == '3') {
//     sci = parseInt(prompt(' sci: '));
//     percentage = (eng + dzo + math + sci) / 4;
//     if (total1 >= 50 && fees == 45000) {
//         console.log("Admission successfull! ")
//         console.log("Age: " + age + " Cid: " + CID + "percentage: " + percentage);

//     } else (
//         console.log("Admission Failed! since your percentage is not upto our expectation(50%) ")

//     )


// }
// else (
//     console.log("Admission Failed! ")
// )
