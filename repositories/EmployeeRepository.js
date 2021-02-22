const BaseRepository = require('./BaseRepository')
const dataModel = require('../model/employee.model');

class EmployeeRepository extends BaseRepository{
    constructor(){
        super();
        this.model = dataModel
    }
}

module.exports = EmployeeRepository