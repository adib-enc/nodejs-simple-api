let Constants = {
    baseResponse(success, message, data) {
        return {
            success: success,
            message: message,
            data: data,
        }
    },
    successResponse(message, data) {
        return Constants.baseResponse(true, message, data)
    },
    failResponse(message, data) {
        return Constants.baseResponse(false, message, data)
    },
    // basic internal server error
    InternalSE(res, err) {
        res.status(500);
        res.json( Constants.failResponse("Error", err) );
    },
}

module.exports = Constants