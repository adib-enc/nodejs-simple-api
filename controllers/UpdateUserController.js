const User = require('../model/user.model');

/**
 * Update user controller
 * @param req
 * @param res
 */
module.exports = function (req, res) {
    if (typeof req.params.userId === 'string') {
        User.findByIdAndUpdate(req.params.userId, {
            $set: req.body
        }, {
            new: true // It will return updated data
        }).then(function (updated) {
            if (updated !== null) {
                res.json({
                    message: 'Updated',
                    data: updated
                });
            } else {
                res.status(404); // Not found
                res.json({
                    message: 'Couldn\'t fnd any user with id ' + req.params.userId
                });
            }
        }).catch(function (errUpdated) {
            res.status(500); // Internal server error response
            res.json(errUpdated);
        });
    } else {
        res.status(400); // Bad request
        res.json({
            message: 'Invalid userID!'
        });
    }
};