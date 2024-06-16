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
      firstName: name, // Changed to match the displayEmployees function
      lastName: lastname, // Changed to match the displayEmployees function
      salary: salary,
    };

    employees.push(employee);

    moreEmployees = confirm("Do you want to add another employee?");
  }

  return employees;
};

// Calculate the sum of all salaries
const calculateTotalSalary = function(employeesArray) {
  let totalSalary = 0;
  for (let i = 0; i < employeesArray.length; i++) {
    totalSalary += employeesArray[i].salary;
  }
  return totalSalary;
};

// Calculate the average salary
const calculateAverageSalary = function(totalSalary, numberOfEmployees) {
  return totalSalary / numberOfEmployees;
};

// Format the average salary in USD
const formatSalary = function(salary) {
  return salary.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
};

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  const totalSalary = calculateTotalSalary(employeesArray);
  const averageSalary = calculateAverageSalary(totalSalary, employeesArray.length);
  const formattedAverageSalary = formatSalary(averageSalary);

  console.log(`The average employee salary between our ${employeesArray.length} employee(s) is ${formattedAverageSalary}`);
};

// Select a random employee + display a random employee
const getRandomEmployee = function(employeesArray) {
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];

  console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`);
};




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