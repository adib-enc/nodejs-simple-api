const BaseDataController = require('../controllers/BaseDataController');
const EmployeeController = require('../controllers/EmployeeController');

let baseController = new BaseDataController();
let employeeController = new EmployeeController();

// request handler injector
function handler(_object, subhandler){
    return function(req, res){
        req._object = _object
        subhandler(req, res)
    }
}

function baseResource(server, name, controller){
    server.post('/'+name+'/create', handler(controller, controller.create));
    server.get('/'+name+'/all', handler(controller, controller.all));
    server.get('/'+name+'/detail/:id', handler(controller, controller.detail));
    server.put('/'+name+'/update/:id', handler(controller, controller.update));
    server.post('/'+name+'/delete/:id', handler(controller, controller.delete));
}

module.exports = function (server) {
    baseResource(server, "data", baseController)
    baseResource(server, "employee", employeeController)
}