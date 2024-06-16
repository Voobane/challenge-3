// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  const employees = [];
  let moreEmployees = true;

  while (moreEmployees) {
    const name = prompt("Enter employee's first name:");
    const lastname = prompt("Enter employee's last name:");
    const salary = parseInt(prompt("Enter employee's Salary:"), 10);

    const employee = {
      name: name,
      lastname: lastname,
      salary: salary,
    };

    employees.push(employee);

    moreEmployees = confirm("Do you want to add another employee?");
  }

  return employees;
}





// Display the average salary + // TODO: Calculate and display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  
}




// Select a random employee + display a random employee
const getRandomEmployee = function(employeesArray) {
const randomIndex = Math.floor(Math.random() * employeesArray.length);
const randomEmployee = employeesArray[randomIndex];
// Todo: -seek the random employee's first and last name

//Todo: -display a the first and last name with console like : "Congratulations to "Random Employee:", our random drawing winning!"
console.log(`Congratulations to ${randomEmployee.name} ${randomEmployee.lastname}, our random drawing winner!`);
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
    firstNameCell.textContent = currentEmployee.name;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastname;
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

  employees.sort(function(a, b) {
    if (a.lastname < b.lastname) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);