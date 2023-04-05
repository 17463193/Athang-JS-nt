const prompt = require("prompt-sync")();

console.log("Employee Management System"); 

console.log("Employee list"); 
employee_list = []
let employee;
let answer
do{
function add_employee(){
    let names = prompt('\nName: ')
    let date = prompt('Date (dd/mm/yy): ')
    id = 'EM-' + employee_list+1
    employee_list.push({'name': names, 'id': id, 'date': date})
    console.log('\nEmployee added successfully!')
    home()
}

function remove_employee(){
    id = prompt('\nEnter Employee ID: ')
    for (employee in employee_list){
        if (employee['id'] == id){
            employee_list.remove(employee)
            console.log('\nEmployee removed successfully!')
            home()
            console.log('\nEmployee not found!')
        }
    home()
        }
}

function update_employee(){
    id = prompt('\nEnter Employee ID: ')
    for (employee in employee_list){
        if (employee['id'] == id){
            names = input('Name: ')
            date = input('Date (dd/mm/yy): ')
            employee.update({'name': names, 'date': date})
            console.log('\nEmployee updated successfully!')
            home()
            console.log('\nEmployee not found!')
        }
    home()
        }
}

function display_employee_list(){
  console.log('\nEMPLOYEE LIST')
  console.log('Employee Name\tEmployee ID\t\tDate')
  for (employee in employee_list){
  console.log(employee['name'] + '\t\t' + employee['id'] + '\t' + employee['date'])
    home()
  }
}

function home(){
    console.log('\n\nEMPLOYEE MANAGEMENT SYSTEM')
    display_employee_list()
    console.log('\n1. ADD EMPLOYEE\n2. REMOVE EMPLOYEE\n3. UPDATE EMPLOYEE\n\n')
    
    choice = prompt('Enter your choice (1/2/3): ')
    if (choice == '1'){
        add_employee()
    }
    else if (choice == '2'){
        remove_employee()
    }
    else if (choice == '3'){
        update_employee()
    }
    else{
      console.log('\nInvalid choice!')
        home()
    }
}
home()
answer=prompt("Press enter to continue")
}while(answer!='no')