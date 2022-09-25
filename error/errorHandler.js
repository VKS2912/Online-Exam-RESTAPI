function ErrorHandler(Error, req, res, next) {
    res.status(Error.status || 500);
    res.send({ "error": true, status: Error.status, "message": Error.message || "Internal Server Error " })
}

module.exports = ErrorHandler;