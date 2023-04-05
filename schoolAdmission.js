const prompt = require("prompt-sync")();
console.log("Losal Gyatsho Academy");


let details = prompt("Enter your grade:");



if (details == "grade 1") {
    let name = prompt("Enter Name:\t");
    let age = parseInt(prompt("Enter Age:\t"));
    const cid = parseInt(prompt("Enter CID:\t"));
    let eng = parseInt(prompt("Enter Eng:\t"));
    let dzo = parseInt(prompt("Enter Dzo:\t"));
    let math = parseInt(prompt("Enter Math:\t"));
    let fees = parseInt(prompt('fees:\t'));

    let percentage = (eng + dzo + math) / 3;
    console.log("Total percentage:" + percentage);

    if (percentage >= 60 && fees == 25000) {
        console.log("\nAdmission successfull!")
        console.log("\nname: " + name + "\nAge: " + age + " \nCid: " + cid + "\npercentage: " + percentage);

    } else (
        console.log("\nAdmission Failed! since your percentage is not upto our expectation(60%) ")

    )

}
else if (details == "grade 2") {

    let name = prompt("Enter Name:\t");
    let age = parseInt(prompt("Enter Age:\t"));
    const cid = parseInt(prompt("Enter CID:\t"));
    let eng = parseInt(prompt("Enter Eng:\t"));
    let dzo = parseInt(prompt("Enter Dzo:\t"));
    let math = parseInt(prompt("Enter Math:\t"));
    let fees = parseInt(prompt('fees:\t'));

    let percentage = (eng + dzo + math) / 3;
    console.log("Total percentage:" + percentage);

    if (percentage >= 40 && fees == 30000) {
        console.log("\nAdmission successfull!")
        console.log("\nname: " + name + "\nAge: " + age + " \nCid: " + cid + "\npercentage: " + percentage);

    } else (
        console.log("\nAdmission Failed! since your percentage is not upto our expectation(40%) ")

    )

}
else if (details == "grade 3") {
    let name = prompt("Enter Name:\t");
    let age = parseInt(prompt("Enter Age:\t"));
    const cid = parseInt(prompt("Enter CID:\t"));
    let eng = parseInt(prompt("Enter Eng:\t"));
    let dzo = parseInt(prompt("Enter Dzo:\t"));
    let math = parseInt(prompt("Enter Math:\t"));
    let sci = parseInt(prompt("Enter science:\t"));
    let fees = parseInt(prompt('fees:\t'));

    percentage = (eng + dzo + math + sci) / 4;
    if (percentage >= 50 && fees == 45000) {

        console.log("\nAdmission successfull!\n ")
        console.log("name: " + name + "\n Age: " + age + " \nCid: " + cid + "\npercentage: " + percentage);

    } else (
        console.log("\nAdmission Failed! since your percentage is not upto our expectation(50%) ")

    )


}
else {
    console.log("Enter your grade 1 to 3")
}




