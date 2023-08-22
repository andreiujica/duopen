const logger = require('../utils/logger');

const errorHandler = (err, req, res, next) => {
    logger.error(err.message);
    res.status(err.status || 500).send({
        error: {
            message: err.message || 'Internal Server Error'
        }
    });
};

module.exports = errorHandler;
