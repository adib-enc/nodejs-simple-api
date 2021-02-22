const mongoose = require('mongoose');

const Schema = mongoose.Schema;

/**
 * Exporting module
 */
module.exports = function(schemeName, schemaJson){
    return mongoose.model(schemeName, new Schema(schemaJson));
}