// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
let employeesArray = []
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
let askAgain = true 
  while (askAgain == true) {
  let firstName = prompt("Enter First Name:");
  // console.log(firstName);
  let lastName = prompt("Enter Last Name:");
  // console.log(lastName);
  let salaryString = prompt("Enter Your Salary:");
  let salary = parseInt(salaryString)
  if (isNaN(salary)) {
    salary = 0
    }
  // console.log (salary);

let employee = {
  firstName, lastName, salary
};

// console.log(employee);

employeesArray.push(employee);

let result = window.confirm('Enter another employee?')
if (result) {
  askAgain = true
} else
  (askAgain = false)
}
return employeesArray
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
let totalSalary = employeesArray.reduce((acc, employee) => acc + employee.salary, 0);

let avgSalary = totalSalary / employeesArray.length

console.log(`The average employee salary between our ${employeesArray.length} employee(s) is $${avgSalary}`);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  let randIndex = Math.floor(Math.random() * employeesArray.length);
  let randEmployee = employeesArray[randIndex]
console.log(`congratulations to ${randEmployee.firstName} ${randEmployee.lastName}, our random drawing winner!`)
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);