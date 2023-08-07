const logger = require('../../config/logger');

function onDisconnect(socket) {
    socket.on('disconnect', () => {
        logger.info(`User disconnected ${socket.id}`);
    });
}

module.exports = onDisconnect;
