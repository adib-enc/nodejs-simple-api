const User = require('../model/user.model');

/**
 * Detail user controller
 * @param req
 * @param res
 */
module.exports = function (req, res) {

    /**
     * Check if userId param is valid
     */
    if (typeof req.params.userId === 'string') {
        User.findById(req.params.userId).then(function (user) {
            if (user !== null) {
                res.json(user);
            } else {
                res.status(404);
                res.json({
                    message: 'Couldn\'t find any user with id ' + req.params.userId
                });
            }
        }).catch(function (errUser) {
            res.status(500);
            res.json(errUser);
        });
    } else {
        res.status(400);
        res.json({
            message: 'Invalid userID!'
        });
    }
};