const prompt = require("prompt-sync")();

console.log("\t   EMPLOYEE MANAGEMENT SYSTEM:\n");

console.log("\t        EMPLOYEE LIST:\n");
let answer;

let add_name =[];
let add_date =[];
let EId = [];
let emp =[];
do{
 
console.log("Employee Name\t\t\t"+"Employee ID\t\t\t"+"Date\n");

for (let i = 0; i < add_name.length; i++ ) {
    console.log(add_name[i]+"\t\t\t\t "+ emp[i]+EId[i] +"\t\t\t\t" +add_date[i]+"\n");
  }


console.log("1. Add Employee");
console.log("2. Remove Employee");
console.log("3. Update Employee\n");



let user = prompt("Enter to display(1,2,3):\t")

    if(user == 1){
        const newId = add_name.length+1
        console.log("Add-Employee-Page:");
       
        add_name.push(prompt("Enter Name:\t"));
        add_date.push(prompt("Enter Date:\t"));
        EId.push(newId)
        emp.push('Emp- ')
        console.log("Added Employee!");
        
   }else if(user == 2){
   let Id =parseInt(prompt('\nEnter Employee ID:Emp- ')) 
    
    for (let i = 0; i <= add_name.length; i++ ) {
     
      if(EId.includes(Id)){
          Id = Id -1;
          add_name[Id] = " ";
          add_date[Id]= " ";
          emp[Id]=" ";
          EId[Id]="";
          Id = 1000;


          console.log("press enter to remove:");
      }
    }}
    else if (user == 3) {

      console.log("\n3. UPDATE EMPLOYEE");
      let Id2=parseInt(prompt("Enter the ID of the data item you want to update:Emp- "));
     
      if (EId.includes(Id2)) {
          let newName = prompt("Enter the new name:");
          let newDate = prompt("Enter the new date:");
  
        Id2= Id2 - 1;
        add_name[Id2] = newName;
        add_date[Id2] = newDate;
          console.log(`Employee with ID ${EId} have been updated`);
      } else {
        console.log(`Employee with ID ${EId} not found`);
     
      }
  
  }
        
   
   else{
    console.log("Wrong Input!!! \nEnter user from 1-3");
   }
   answer=prompt("Press Enter to add:\n");
   }while(answer != "no");
   