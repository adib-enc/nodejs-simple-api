const createUserController = require('../controllers/CreateNewUserController');
const detailUserController = require('../controllers/DetailUserController');
const getAllUserController = require('../controllers/GetAllUserController');
const deleteUserController = require('../controllers/DeleteUserController');
const updateUserController = require('../controllers/UpdateUserController');

/**
 * User route
 * @param server
 */
module.exports = function (server) {
    /**
     * Create new user
     */
    server.post('/user/create', createUserController);

    /**
     * Get all user
     */
    server.get('/user/all', getAllUserController);

    /**
     * Detail user
     */
    server.get('/user/detail/:userId', detailUserController);

    /**
     * Update user
     */
    server.put('/user/update/:userId', updateUserController);

    /**
     * Delete user
     */
    server.post('/user/delete', deleteUserController);
};