const logger = require('../../config/logger');

function onLeaveRoom(socket) {
    socket.on('leave-room', (room) => {
        logger.info(`User ${socket.id} left room ${room}`);
        socket.leave(room);
    });
}

module.exports = onLeaveRoom;
