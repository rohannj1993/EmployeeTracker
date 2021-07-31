const connection = require('./connection.js')
class Query {
    constructor(connection) {
        this.connection = connection
    }
    findAllDepartments() {
        return this.connection.promise().query("select * from department")
    }
    findAllRoles() {
        return this.connection.promise().query("select role.id,role.title,role.salary,department.name as department from role join department on role.department_id=department.id")
    }
    findAllEmployees(){
        return this.connection.promise().query("select * from employee")
    }
    addDepartment(department){
        return this.connection.promise().query(`INSERT INTO department SET ?`, department)
    }
    addRole(role){
        return this.connection.promise().query(`INSERT INTO role SET ?`, role)
    }
    addEmployee(employee){
        return this.connection.promise().query(`INSERT INTO employee SET ?`, employee)
    }
}
module.exports = new Query(connection)