const Constants = require('../constants/Constants');
const DataRepository = require('../repositories/DataRepository');

/**
 * Create new user controller
 * @param req
 * @param res
 */
class BaseDataController{
    _object = null

    constructor(req = null, res = null){
        this.req = req;
        this.res = res;

        this.setRepository(new DataRepository())
    }

    logger(ett) {
        console.log("[app] :: ")
        console.log(ett)
    }

    baseRequestHandler(req, res, callback) {
        console.log("base handler")
        this.logger("[req]")
        // this.logger(req)
        this.logger("[res]")
        // this.logger(res)
    }

    appendCreated(data){
        data.createdAt = "now";
        return data
    }

    setRepository(repo){
        this.repo = repo
        
        return this
    }

    getRepository(){
        return this.repo
    }

    create(req, res){
        req._object.getRepository().create(req.body).then(function (created) {
            res.json( Constants.successResponse("Created", created) );
        }).catch(function (err) {
            Constants.InternalSE(res, err)
        })
    }
    
    detail(req, res){
        req._object.getRepository().single(req.params.id).then(function (data) {
            res.json( Constants.successResponse("Ok", data) );
        }).catch(function (err) {
            Constants.InternalSE(res, err)
        })
    }

    all(req, res){
        req._object.getRepository().all().then(function (datas) {
            res.json( Constants.successResponse("Ok", datas) );
        }).catch(function (err) {
            Constants.InternalSE(res, err)
        })
    }

    update(req, res){
        req._object.getRepository().update(req.params.id, req.body).then(function (updated) {
            res.json( Constants.successResponse("Updated", updated) );
        }).catch(function (err) {
            Constants.InternalSE(res, err)
        })
    }
    
    delete(req, res){
        req._object.getRepository().delete(req.params.id).then(function (deleted) {
            res.json( Constants.successResponse("Deleted", deleted) );
        }).catch(function (err) {
            Constants.InternalSE(res, err)
        })
    }
}

module.exports = BaseDataController