const BaseDataController = require('./../controller/BaseDataController');

let baseController = new BaseDataController();

// request handler injector
function handler(_object, subhandler){
    return function(req, res){
        req._object = _object
        subhandler(req, res)
    }
}

module.exports = function (server) {
    server.post('/data/create', handler(baseController, baseController.create));
    server.get('/data/all', handler(baseController, baseController.all));
    server.get('/data/detail/:id', handler(baseController, baseController.detail));
    server.put('/data/update/:id', handler(baseController, baseController.update));
    server.post('/data/delete', handler(baseController, baseController.delete));
}