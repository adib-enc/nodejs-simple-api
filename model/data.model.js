var schemer = require('./schemer');

/**
 * Defining user schema
 */
const dataScheme = {
    name: {
        type: String, // Data type
        required: true, // Allow null = false
        unique: true // Name must be unique
    },
    d1: {
        type: String,
        required: true
    },
    d2: {
        type: String,
        required: true
    },
    d3: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now() // Default value
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    }
};

/**
 * Exporting module
 */
module.exports = schemer("Data", dataScheme);