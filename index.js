const inquirer = require('inquirer');
const consoleTable = require('console.table');
const db = require('./db/query');



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
  ]).then(getUserChoice => {
    switch (getUserChoice.startOptions) {
      case "view all departments":
        getDepartments();
        break;
      case "view all roles":
        getRoles();
        break;
      case "view all employees":
        getEmployees();
        break;
      case "add departments":
        addDepartments();
        break;
      case "add Roles":
        addRoles();
        break;
      case "add employee":
        addEmployees();
        break;
      case "update employee role":
        updateEmployeeRole();
        break;
      case "exit":
        break;
    }
  })
}
function getDepartments() {
  db.findAllDepartments().then(([rows]) => {
    let departments = rows
    console.log(departments)
    console.table(departments)
  })
    .then(() => startQuestions())
}
function getRoles() {
  db.connection.promise().query("select * from role").then(response => {
    console.log(response)
    console.table(response)
  })
    .then(() => startQuestions())
}
function getEmployees() {
  db.connection.promise().query("select * from employee").then(response => {
    console.log(response)
    console.table(response)
  })
    .then(() => startQuestions())
}
function addDepartments() {
  inquirer.prompt([
    {
      type: "input",
      name: "addDep",
      message: "What department would you like to add"
    }
  ])

    .then(() => {
      db.connection.promise().query("select * from department").then(response => {
        console.log(response)
        console.table(response)

      }
      )
      startQuestions()
    }
    )

}
function addRoles() {
  db.promise().query("select * from roles").then(response => {
    console.log(response)
    console.table(response)
  })
    .then(() => startQuestions())
}
function addEmployees() {
  db.connection.promise().query("select * from employees").then(response => {
    console.log(response)
    console.table(response)
  })
    .then(() => startQuestions())
}
function updateEmployeeRole() {
  db.connection.promise().query("update * from employees").then(response => {
    console.log(response)
    console.table(response)
  })
    .then(() => startQuestions())
}


startQuestions();