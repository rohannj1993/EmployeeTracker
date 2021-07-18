const inquirer = require('inquirer');
const consoleTable = require('console.table');

const Choices = require('inquirer/lib/objects/choices');


function startQuestions(){
inquirer.prompt([
  {
  type:'list',
  name:'startOptions',
  message:"What would you like to do?"
  Choices:[
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
]).then(function getUserChoice) {
  switch
}
