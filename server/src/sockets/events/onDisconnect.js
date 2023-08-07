const logger = require('../../utils/logger');

function onDisconnect(socket) {
    socket.on('disconnect', () => {
        logger.info(`User disconnected ${socket.id}`);
    });
}

module.exports = onDisconnect;
