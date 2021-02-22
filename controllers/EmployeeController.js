const Constants = require('../constants/Constants');
const BaseDataController = require('./BaseDataController');
const EmployeeRepository = require('../repositories/EmployeeRepository');

class EmployeeController extends BaseDataController{
    constructor(req = null, res = null){
        super();
        this.req = req;
        this.res = res;

        this.setRepository(new EmployeeRepository())
    }
}

module.exports = EmployeeController