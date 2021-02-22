const User = require('./../model/user.model');

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
    }

    logger(ett) {
        console.log("[app] :: ")
        console.log(ett)
    }

    baseRequestHandler(req, res, callback) {
        console.log("base handler")
        this.logger("[req]")
        this.logger(req)
        this.logger("[res]")
        this.logger(res)
    };

    appendCreated(data){
        data.createdAt = "now";
        return data
    }

    create(req, res){
        var data = {
            msg: "reqData",
            req: req._object.appendCreated(req.body),
        }
        res.json(data)
    }
    
    detail(req, res){
        var data = {
            msg: "detail",
            req: req.params,
        }
        res.json(data)
    }

    all(req, res){
        req._object.bbb()
        console.log("aaa")
        res.json("all")
    }

    bbb(){
        console.log("bbb")
    }

    update(req, res){
        var data = {
            msg: "reqData",
            req: req._object.appendCreated(req.body),
        }
        res.json(data)
    }
    
    delete(req, res){
        var data = {
            msg: "reqData",
            req: req._object.appendCreated(req.body),
        }
        res.json(data)
    }
}

// module.exports = new BaseDataController()
module.exports = BaseDataController