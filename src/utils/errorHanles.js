const errorHandler = (error, req, res, next) => {
    if (error.name === 'SequelizeValidation Error') {
        const errObj = {}
        error.errors.map(er => {
            errObj[er.path] = er.message;
        })
        return res.status(400).json(errObj);
        }
        return res.status(500).json({
            message: error.message,
            error: error,
        })
    }


    module.exports = errorHandler;