const inquirer = require('inquirer');
const consoleTable = require('console.table');
const connection = require('./db/connection');



function startQuestions() {
  inquirer.prompt([
    {
      type: 'list',
      name: 'startOptions',
      message: "What would you like to do?",
      choices: [
        "view all departments",
        "view all roles",
        "view all employees",
        "add departments",
        "add roles",
        "add employee",
        "update employee role",
        "exit"

      ]

    }
  ]).then(function getUserChoice() {
    switch (getUserChoice.choice) {
      case "view all departments":
        getDepartments(getUserChoice);
        break;
      case "view all roles":
        getRoles(getUserChoice);
        break;
      case "view all employees":
        getEmployees(getUserChoice);
        break;
      case "add departments":
        addDepartments(getUserChoice);
        break;
      case "add Roles":
        addRoles(getUserChoice);
        break;
      case "add employee":
        addEmployees(getUserChoice);
        break;
      case "update employee role":
        updateEmployeeRole(getUserChoice);
        break;
      case "exit":
        break;
    }
  })
}

startQuestions();