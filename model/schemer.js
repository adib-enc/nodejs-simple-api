const mongoose = require('mongoose');

const Schema = mongoose.Schema;

/**
 * Exporting module
 */
module.exports = function(schemeName, schemaJson){
    mongoose.model(schemeName, new Schema(schemaJson));
}