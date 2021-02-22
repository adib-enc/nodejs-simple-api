const User = require('../model/user.model');

/**
 * Get all user controller
 * @param req
 * @param res
 */
module.exports = function (req, res) {
    User.find().lean().then(function (user) {
        res.json(user);
    }).catch(function (errUser) {
        res.status(500);
        res.json(errUser);
    });
};