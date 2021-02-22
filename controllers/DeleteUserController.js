const User = require('../model/user.model');

/**
 * Delete user controller
 * @param req
 * @param res
 */
module.exports = function (req, res) {
    if (typeof req.body.userId === 'string') {
        User.findByIdAndRemove(req.body.userId).then(function (removed) {
            if (removed !== null) {
                res.json({
                    message: 'Removed!',
                    data: removed
                });
            } else {
                res.status(404);
                res.json({
                    message: 'Couldn\'t find any user with id ' + req.body.userId
                });
            }
        }).catch(function (errRemoved) {
            res.status(500);
            res.json(errRemoved);
        });
    } else {
        res.status(400);
        res.json({
            message: 'Invalid userID!'
        });
    }
};