const connection = require('./connection.js')
class Query {
    constructor(connection) {
        this.connection = connection
    }
    findAllDepartments() {
        return this.connection.promise().query("select * from department")
    }
}
module.exports = new Query(connection)