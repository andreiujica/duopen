const winston = require('winston');

const logger = winston.createLogger({
    level: process.env.LOG_LEVEL || 'info', 
    format: winston.format.json(),
    defaultMeta: { service: 'code-collab-backend' },
    transports: [
        new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
        new winston.transports.File({ filename: 'logs/combined.log' })
    ]
});

// If we're not in production, log to the `console` with the format: `${info.level}: ${info.message}`
if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple()
    }));
}

module.exports = logger;
