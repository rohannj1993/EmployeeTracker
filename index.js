const inquirer = require('inquirer');
const consoleTable = require('console.table');
const db = require('./db/connection');



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
  ]).then( getUserChoice=> {
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
 function getDepartments(){
   db.promise().query("select * from department").then(response => {
     console.log(response)
     console.table(response)
   })
.then(() => startQuestions())
 }
 function getRoles(){
  db.promise().query("select * from roles").then(response => {
    console.log(response)
    console.table(response)
  })
.then(() => startQuestions())
}
function getEmployees(){
  db.promise().query("select * from employees").then(response => {
    console.log(response)
    console.table(response)
  })
.then(() => startQuestions())
}
function addDepartments(){
  inquirer.prompt([
    {
      type:"input",
      name:"addDep",
      message:"What department would you like to add"
    }
  ])
  db.promise().query("select * from department").then(response => {
    console.log(response)
    console.table(response)
    
  })
.then(() => startQuestions())
}
function addRoles(){
  db.promise().query("select * from roles").then(response => {
    console.log(response)
    console.table(response)
  })
.then(() => startQuestions())
}
function addEmployees(){
  db.promise().query("select * from employees").then(response => {
    console.log(response)
    console.table(response)
  })
.then(() => startQuestions())
}
function updateEmployeeRole(){
  db.promise().query("update * from employees").then(response => {
    console.log(response)
    console.table(response)
  })
.then(() => startQuestions())
}


startQuestions();