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
      case "add roles":
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

    console.table(departments)
  })
    .then(() => startQuestions())
}
function getRoles() {
  db.findAllRoles().then(([rows]) => {
    let roles = rows

    console.table(roles)
  })
    .then(() => startQuestions())
}
function getEmployees() {
  db.findAllEmployees().then(([rows]) => {
    let employees = rows
    // console.log(response)
    console.table(employees)
  })
    .then(() => startQuestions())
}
function addDepartments() {
  inquirer.prompt([
    {
      // type: "input",
      name: "name",
      message: "What department would you like to add"
    }
  ])

    .then((input) => {
      console.log(input)
      let name = input
      db.addDepartment(name).then(() => {
        startQuestions()
      })
    })
}
function addRoles() {
  db.findAllDepartments().then(([rows]) => {
    let departments = rows
    const departmentChoice = departments.map(({ id, name }) => ({
      name: name,
      value: id
    }))
    inquirer.prompt([
      {
        name: "title",
        message: "What title would you like to add"
      },
      {
        name: "salary",
        message: "What would you like your salary to be"
      },
      {
        name: "department_id",
        message: "What department would your role fall under",
        type: "list",
        choices: departmentChoice
      },
    ])
      .then((role) => {
        db.addRole(role).then(() => {
          startQuestions()
        })
      })
  })
}
function addEmployees() {
  
    inquirer.prompt([
      {
        name: "first_name",
        message: "What is your first name?"
      },
      {
        name: "last_name",
        message: "What is your last name?"
      },
    ])
    .then(res => {
     let firstName = res.first_name;
     let lastName = res.last_name;

     db.findAllRoles().then(([rows]) => {
      let roles = rows
      const roleChoice = roles.map(({ id, title }) => ({
        name: title,
        value: id
      }))
      inquirer.prompt({
          name: "role_id",
          message: "What is this employees role?",
          type: "list",
          choices: roleChoice
      })
      .then(res => {
        let roleId = res.role_id
        
        db.findAllEmployees().then(([rows]) => {
          let employees = rows
          const managerChoice = employees.map(({ id, first_name,last_name }) => ({
            name: `${first_name} ${last_name}`,
            value: id
          }))
          managerChoice.unshift({name:"none",value:null})
          
          inquirer.prompt({
            name: "manager_id",
            message: "Who is this employees manager?",
            type: "list",
            choices: managerChoice
        })
        .then(res =>{
          let employee = {
            manager_id:res.manager_id,
            role_id:roleId,
            first_name: firstName,
            last_name: lastName
          }

          db.addEmployee(employee)
        })
        .then(() => {
            startQuestions()
          })
        })
      })
    })
  })
}
function updateEmployeeRole() {
  db.connection.promise().query("update * from employees").then(response => {

    console.table(response)
  })
    .then(() => startQuestions())
}



startQuestions();