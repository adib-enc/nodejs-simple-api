const restify = require('restify');

/**
 * Creating server
 * @type {*|Server}
 */
const server = restify.createServer({
    name: 'nodejs-simple-api'
});

/**
 * Configure restify plugin to make restify can receive request body and request query
 */
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

/**
 * Call db connection
 */
require('./config/datasource');

/**
 * Call route
 */
require('./route/User.route')(server);
require('./route/route')(server);

/**
 * Starting server
 *
 * Server will start on port 3000
 */
server.listen(3000, function () {
    console.log('Server UP!');
});

/**
 * Exporting module
 * @type {*|Server}
 */
module.exports = server;