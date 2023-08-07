const logger = require('../../utils/logger');

function onConnect(socket) {
    logger.info(`User connected ${socket.id}`);
}

module.exports = onConnect;
