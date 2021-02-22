var schemer = require('./schemer');

/**
 * Defining user schema
 */
const dataScheme = {
    registrationCode: {
        type: String, // Data type
        required: true, // Allow null = false
        unique: true // Name must be unique
    },
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    occupation: {
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
module.exports = schemer("Employee", dataScheme);