const User = require('../model/user.model');

/**
 * Create new user controller
 * @param req
 * @param res
 */
module.exports = function (req, res) {
    User.create(req.body).then(function (created) {
        /**
         * Sending success response, status = 200 by default
         */
        res.json(created);
    }).catch(function (errCreated) {
        /**
         * Sending error response with status = 500 or Internal server error response
         */
        res.status(500);
        res.json(errCreated);
    });
};